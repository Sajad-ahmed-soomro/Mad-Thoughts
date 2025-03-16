import NextAuth from "next-auth";
import Google from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from "./utils";
import { User } from "./model";
import bcrypt from "bcryptjs/dist/bcrypt";
import { authConfig } from "./authConfig";

const log = async (credentials) => {
    try {
        await connectToDB();
        const user = await User.findOne({ username: credentials.username });
        if (!user) {
            throw new Error("Wrong credentials");
        }

        // const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        // if (!isPasswordCorrect) {
            // throw new Error("Wrong credentials");
        // }

        return {
            id: user._id,
            username: user.username,
            // Add other fields as needed
        };

    } catch (error) {
        console.log(error);
        throw new Error("Failed to login");
    }
}



export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await log(credentials);
                    return user;

                } catch (error) {
                    return null;
                }


            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile);
            if (account.provider === "google") {
                connectToDB();
                try {
                    const user = await User.findOne({ email: profile.email })

                    if (!user) {
                        const newUser = new User({
                            username: profile.name,
                            email: profile.email,
                            image: profile.picture,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        }

    },
    ...authConfig.callbacks,

})
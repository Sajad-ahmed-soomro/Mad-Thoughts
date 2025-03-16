"use server"
import { signIn, signOut } from '@/lib/auth'
import { connectToDB } from './utils'
import { User, Post } from './model.js';
import bcrypt from 'bcryptjs';
import error from '@/app/error';

import { revalidatePath } from "next/cache";


export const addPost = async (prevState, formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        // Ensure database connection
        await connectToDB();

        // Validate required fields
        if (!userId) {
            return { error: "User ID is required" };
        }

        // Create a new post
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        // Save the post to the database
        await newPost.save();
        console.log("Saved to DB");

        // Revalidate paths (make sure these functions are correctly imported and used)
        revalidatePath("/blog");
        revalidatePath("/admin");

        // Return success or the new post details
        return { success: "Post added successfully!" };

    } catch (err) {
        console.error("Error adding post:", err);
        return { error: "Something went wrong!" };
    }
};


export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const addUser = async (prevState, formData) => {
    const { username, email, password, img } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            img,
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const handleGoogleLogin = async () => {
    await signIn("google")
}

export const handleGooglelogOut = async () => {

    await signOut();
}

export const register = async (previousState, formData) => {
    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {

        return { error: "Password does not match" };
    }
    try {
        connectToDB();

        const user = await User.findOne({ username });
        if (user) {
            return { error: "User Already exists" };
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password,
            img,
        })

        await newUser.save();
        return { success: true };
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong" };
    }
}

export const Login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);


    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }

}
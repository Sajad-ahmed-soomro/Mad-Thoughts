// authConfig.js
export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = token.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;


            }
            return session;

        },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPanel = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPanel = request.nextUrl?.pathname.startsWith("/login");

            // if (isOnAdminPanel && !user?.isAdmin) {
                // return false;
            // }

            // if (isOnBlogPanel && !user) {
                // return false;
            // }

            // if (isOnLoginPanel && user) {
                // return Response.redirect(new URL("/", request.nextUrl));
            // }

            return true;
        },
    }
}

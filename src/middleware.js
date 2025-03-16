
import { authConfig } from './lib/authConfig';
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth;
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
}
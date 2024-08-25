import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { UserModel } from "./model/user-model";
import { dbConnect } from "./lib/mongo";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                await dbConnect();
                const existingUser = await UserModel.findOne({ email: user.email });
                if (!existingUser) {
                    // const newUser = new UserModel({
                    //     email: user.email,
                    // });
                    // await newUser.save();
                    // console.log("NEW USER IS ADDED:", user);
                    console.log("NOTE!!! Auto Registration from Provider Sign-In is disabled. Do it manually or please check auth.ts");
                    return '/';
                } else {
                    console.log("User is already existing");
                }
                return true; // Ensure the callback returns true
            } catch (error) {
                console.error("Error during sign-in:", error);
                return false; // Return false if there is an error
            }
        },
    },
});

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "./model/user-model";
import dbConnect from "./lib/mongo";
import portfolio from "./app/[id]/page";

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
                const existingUser = await User.findOne({ email: user.email });
                if (!existingUser) {
                    const newUser = new User({
                        name: user.name,
                        email: user.email,
                        username: "user" + user.email,
                        image: user.image,
                    });
                    await newUser.save();
                    console.log("NEW USER IS ADDED:", user);
                    // console.log("NOTE!!! Auto Registration from Provider Sign-In is disabled. Do it manually or please check auth.ts");
                    // return '/';
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







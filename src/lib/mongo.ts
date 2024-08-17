import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
    return conn;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}











// export const LOGIN = '/login';
// export const ROOT = '/';

// export const PUBLIC_ROUTES = [
//     '/login',
//     '/register',
//     '/products',
//     '/api/auth/callback/google',
//     '/api/auth/callback/github',
// ]

// export const PROTECTED_SUB_ROUTES = [
//     '/checkout',
// ]
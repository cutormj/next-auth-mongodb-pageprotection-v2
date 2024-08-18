import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_DB_CONNECTION_STRING;

let cached = (global as any).mongoose || {conn: null, promise: null};

export const dbConnect = async () => {
  if(cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
    dbName:'learnnextjsdb',
    // bufferCommands: false,
  })

}

// export async function dbConnect() {
//   try {
//     let conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
//     console.log("Connected to database");
//     return conn;
//   } catch (e) {
//     if (e instanceof Error) {
//       throw new Error(e.message);
//     } else {
//       throw new Error("An unknown error occurred");
//     }
//   }
// }











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
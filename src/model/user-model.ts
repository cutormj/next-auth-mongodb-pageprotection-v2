import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  name: string;
  password: string;
  email: string;
}

const userSchema: Schema<IUser> = new Schema({
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

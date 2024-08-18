import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  email: string;
}

const userSchema: Schema<IUser> = new Schema({
  email: {
    required: true,
    type: String,
  },
});

export const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

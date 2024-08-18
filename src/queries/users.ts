import { UserModel } from "@/model/user-model";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export async function createUser(user: IUser) {
  try {
    await UserModel.create(user);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}

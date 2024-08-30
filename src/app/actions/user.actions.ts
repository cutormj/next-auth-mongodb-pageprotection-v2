'use server'

import User from "@/model/user-model"

const addUser = async () => {
	const name  = "the name"
	const email = "email@email"
	const username = "username here"

	const newUser = new User({ name, email, username })
	console.log("NEW USER!")
	return newUser.save()

}

const getUserByUsername = async (findusername: string) => {
    
      const user = await User.findOne({ username: findusername });
      console.log("THE USER!",user);
      return user; // Return the found user (or null if not found)
    
  };

const getUsers = async () => {
	return User.find()
}

export { addUser, getUsers, getUserByUsername }
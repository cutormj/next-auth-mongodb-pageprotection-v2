import { userAgent } from "next/server";
import { getUserByUsername, getUsers } from "../actions/user.actions";

import React from 'react'

async function page({params}: {params: {id: string}}) {

  const user = await getUserByUsername(params.id); 
  console.log("HERE IS THE USER!!",user);
  return (
    <div>{user.email}</div>
  )
}

export default page
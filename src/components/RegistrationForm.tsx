"use client"

import { useState } from "react";
import SocialLogins from "./SocialLogins";

import { useRouter } from "next/navigation";

const RegistrationForm = () => {

    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      try {
        const formData = new FormData(event.currentTarget);

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch(`/api/register`, {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        });

        response.status === 201 && router.push('/');
        

      } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }
    }

    return (
        <>
            <form 
              onSubmit={handleSubmit}
              className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md">
                <div className="my-2">
                    <label htmlFor="email">Name</label>
                    <input
                        className="border mx-2 border-gray-500 rounded"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="border mx-2 border-gray-500 rounded"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>

                <div className="my-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="border mx-2 border-gray-500 rounded"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
                >
                    Register
                </button>
            </form>
            <SocialLogins />
        </>
    );
};

export default RegistrationForm;

"use client";

import SocialLogins from "./SocialLogins";
import { doCredentialLogin } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const response = await doCredentialLogin(formData);

            if (response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/home");
            }
        } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }
    }

    return (
        <>
            <div className="text-xl text-red-500">{error}</div>
            <SocialLogins />
        </>
    );
};

export default LoginForm;

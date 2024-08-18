import Image from "next/image";
import Logout from "@/components/Logout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import InitiateWebsite from "@/components/WeddingWebsite/InitiateWebsite";

const HomePage = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/");
        return null; // Ensure the component doesn't render if redirecting
    }

    const { user } = session;

    console.log("Session USER HERE!!!", user);

    const userEmail = user.email || ''; // Ensure userEmail is always a string

    return (
        <div className="flex flex-col items-center m-4">
            {user.name && user.image ? (
                <>
                    <h1 className="text-3xl my-2">
                        Welcome, {user.name}
                    </h1>
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={72}
                        height={72}
                        className="rounded-full"
                    />
                </>
            ) : (
                <h1 className="text-3xl my-2">
                    Welcome, {userEmail}
                </h1>
            )}
            <Logout />
            <InitiateWebsite initiator={userEmail} />
        </div>
    );
};

export default HomePage;

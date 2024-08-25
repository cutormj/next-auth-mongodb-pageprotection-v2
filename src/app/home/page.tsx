
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/NavBar";
import InitiateWebsite from "@/components/WeddingWebsite/InitiateWebsite";

const HomePage = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/");
        return null; // Ensure the component doesn't render if redirecting
    }

    const { user } = session;

    const navUser = {
        name: user.name ?? 'No Name',
        email: user.email ?? 'No Email',
        image: user.image ?? 'No Image',
    }

    return (
        <div className="">
            <NavBar user={navUser}/>
            <InitiateWebsite initiator={navUser.email} />
        </div>
    );
};

export default HomePage;



import { doSocialLogin } from "@/app/actions";

const SocialLogins = () => {
    return (
        <form action={doSocialLogin}>
            <button
                className="bg-blue-700 text-white p-4 rounded-md text-md"
                type="submit"
                name="action"
                value="google"
            >
                Sign In With Google
            </button>
        </form>
    );
};

export default SocialLogins;

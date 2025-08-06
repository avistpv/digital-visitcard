import LogInGoogleButton from "@/components/buttons/LogInGoogleButton";

export default function LoginPage() {
    return (
        <div>
            <div className="p-4 max-w-xs mx-auto">
                <h1 className="text-4xl text-black font-bold text-center mb-2">
                    Sign In
                </h1>
                <p className="text-center mb-6 text-gray-500">
                    Sign in to your account using one of the methods below
                </p>
                <LogInGoogleButton/>
            </div>
        </div>
    );
}
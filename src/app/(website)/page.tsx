import UserForm from "@/components/forms/UserForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <main>
            <section className="pt-32">
                <div className="max-w-md mb-8">
                        <h1 className="text-6xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-lime-500
                        bg-clip-text text-transparent
                        bg-300% animate-gradient"
                        >Your personal link for all ...</span>
                        </h1>
                        <h2 className="text-xl mt-6 text-gray-800 ">
                            Share you social links, info, etc...
                        </h2>
                </div>
                <UserForm user={!!session?.user}/>
            </section>
        </main>
    );
}

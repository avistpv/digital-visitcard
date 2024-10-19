import UserForm from "@/components/forms/UserForm";

export default function Home() {
    return (
        <main>
            <section className="pt-32">
                <div className="max-w-md mb-8">
                    <h1 className="text-6xl font-bold">
                        Your personal link for all ...
                    </h1>
                    <h2 className="text-xl mt-6 text-gray-800">
                        Share you social links, info, etc...
                    </h2>
                </div>
                <UserForm/>
            </section>
        </main>
    );
}

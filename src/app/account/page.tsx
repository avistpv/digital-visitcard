import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions);
    const preferredUsername = searchParams?.preferredUsername;
    if (!session) {
        redirect('/');
    }
    return (
        <div>
            <form>
                <h1 className="text-4xl text-black font-bold text-center mb-2">
                    Choose Your Username
                </h1>
                <p className="text-center mb-6 text-gray-500">
                    Choose your username
                </p>
                <div className="max-w-xs mx-auto">
                    <input
                        className="text-center block p-2 mx-auto border border-slate-200 w-full rounded-lg mb-2"
                        defaultValue={preferredUsername}
                        type="text" placeholder="username"/>
                    <button
                        type="submit"
                        className="font-bold bg-blue-500 text-white py-2 px-4 mx-auto border-slate-200
                        w-full rounded-lg flex items-center justify-center gap-2">
                        <span>
                        Take your username
                        </span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

            </form>
        </div>
    )
}
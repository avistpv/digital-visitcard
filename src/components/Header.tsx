import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import LogOutButton from "@/components/buttons/LogOutButton";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faConnectdevelop} from "@fortawesome/free-brands-svg-icons";

export default async function Header() {
    const session = await getServerSession(authOptions);
    // console.log(session);
    return (
        <header className="bg-white border-b font-bold py-4">
            <div className="flex justify-between max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-2 text-blue-700">
                        <span className="">WebSite</span>
                        <FontAwesomeIcon icon={faConnectdevelop} className="text-blue-500"/>
                    </Link>
                    <nav className="flex items-center gap-4 text-sm text-slate-500">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/pricing'}>Pricing</Link>
                        <Link href={'/contacts'}>Contacts</Link>
                    </nav>
                </div>
                <nav className="flex items-center gap-4 text-sm font-bold text-slate-500">
                    {!!session &&(
                        <>
                            <Link href={'/account'}>
                                Hello, {session?.user?.name}!
                            </Link>
                            <LogOutButton/>
                        </>
                    )}
                    {!session && (
                        <>
                            <Link href={'/login'}>Sign In</Link>
                            <Link href={'/login'}>Create Account</Link>
                        </>
                    )}

                </nav>
            </div>
        </header>
    )
}
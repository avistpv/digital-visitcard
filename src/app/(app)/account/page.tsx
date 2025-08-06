import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/connectDB";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import UserNameForm from "@/components/forms/UserNameForm";
import {Page} from "@/models/page";

interface AccountPageProps {
    searchParams: URLSearchParams;
}

//TODO#2 typisition of search parameters (interface above)
export default async function AccountPage({searchParams}: AccountPageProps) {
    const session = await getServerSession(authOptions);
    const preferredUsername = searchParams?.preferredUsername;
    if (!session) {
        redirect('/');
    }

    await connectDB();
    const page = await Page.findOne({owner: session?.user?.email});

    if (page) {
        return (
            <div>
                <p>
                    Test page - User already created account: /{page.uri}
                </p>
            </div>
        )
    }

    return (
        <div>
            <UserNameForm preferredUsername={preferredUsername}/>
        </div>
    )
}
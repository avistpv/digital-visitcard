'use server';

import {Page} from "@/models/page";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import connectDB from "@/lib/connectDB";

export default async function grabUserName(formData: FormData){
    const username = formData.get('username');
//TODO #1 Change to global variable for starting once after authorizationw
    await connectDB();
    const existedPageDocument = await Page.findOne({uri: username});
    console.log({existedPageDocument});
    if (existedPageDocument) {
        return false;
    } else {
        const session = await getServerSession(authOptions);
        console.log({session});
        const newPage = await Page.create({
            uri: username,
            owner: session?.user?.email,
        });
        return {
            username: newPage.uri,  // Return simple values
            owner: newPage.owner    // Serialized owner (email in this case)
        };
    }
}
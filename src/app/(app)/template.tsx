import {authOptions} from "@/app/api/auth/[...nextauth]/route"; // 👈≈
import type {Metadata} from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "../globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {headers} from "next/headers";
import AppSidebar from "@/components/layout/AppSidebar";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "websiteYour Visit Card",
    description: "Let the world be in touch with you",
};

export default async function AppTemplate({children, ...rest}: Readonly<{ children: React.ReactNode; }>) {
    const headersList = headers();
    const url = headersList.get('next-url');
    console.log(url)

    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect('/');
    }

    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <main className="flex min-h-screen">
            <aside className="bg-white w-48 p-4 rounded-r-2xl">
                <div className="rounded-full overflow-hidden w-24 mx-auto
                border-solid border-4 border-sky-300 shadow-md shadow-gray-500">
                    <Image src={session.user.image} height={256} width={256} alt={'user avatar'}
                           className="">
                    </Image>
                </div>
                <div className="flex justify-center items-center mx-auto">
                   <AppSidebar/>
                </div>
            </aside>
            <div className="grow">
                <div className="bg-white m-8 p-4 shadow-lg">
                    {children}
                </div>
            </div>
        </main>
        </body>
        </html>
    );
}

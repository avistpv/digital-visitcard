'use client'

import {signIn} from "next-auth/react";
import {redirect} from "next/navigation";
import {FormEvent, useEffect} from "react";
import {useRouter} from "next/navigation";

interface UserFormProps {
    user: boolean;
}

export default function UserForm({user}: UserFormProps) {
    const router = useRouter();
    useEffect(() => {
        if (
            'localStorage' in window && window.localStorage.getItem('preferredUsername')
        ) {
            const username = window.localStorage.getItem('preferredUsername');
            window.localStorage.removeItem('preferredUsername');
            redirect('/account?preferredUsername=' + username);
        }
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.querySelector("input");
        const username = input?.value;
        if (username && username.length > 0) {
            if (user) {
                router.push('/account?preferredUsername=' + username);
            } else {
                window.localStorage.setItem("preferredUsername", username);
                await signIn('google');
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="inline-flex items-center shadow-md shadow-gray-800/40 rounded-lg">
                    <span
                        className="bg-white py-4 pl-4 rounded-l-lg">
                        webSiteName.to/
                    </span>
            <input
                name="username"
                type="text"
                className="py-4"
                placeholder="username"/>
            <button type="submit"
                    className="bg-blue-500 text-white py-4 px-6 rounded-r-lg">
                Sign up for free
            </button>
        </form>
    )
}
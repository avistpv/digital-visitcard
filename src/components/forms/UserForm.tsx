'use client'
import {signIn} from "next-auth/react";
import {redirect} from "next/navigation";
import {useEffect} from "react";


export default function UserForm() {
    useEffect(() => {
        if (
            'localStorage' in window && window.localStorage.getItem('preferredUsername')
        ) {
            const username = window.localStorage.getItem('preferredUsername');
            window.localStorage.removeItem('preferredUsername');
            redirect('/account?preferredUsername=' + username);
        }
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector("input");
        const username = input.value;
        if (username && username.length > 0) {
            window.localStorage.setItem("preferredUsername", username);
            await signIn('google')
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
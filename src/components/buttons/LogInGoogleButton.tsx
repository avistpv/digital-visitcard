'use client';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {signIn} from "next-auth/react";

export default function LogInGoogleButton() {
    return (
        <button
            onClick={() => signIn('google')}
            className="bg-white shadow text-center w-full py-4 flex justify-center items-center gap-3">
            <FontAwesomeIcon icon={faGoogle} className="h-6"/>
            <span>Sign In With Google</span>
        </button>
    );
}
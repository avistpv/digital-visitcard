'use client';
import {signOut} from "next-auth/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";


export default function LogOutButton() {
    return (
        <button
            className="flex items-center border rounded-lg gap-2 p-2 px-4 shadow"
            onClick={() => signOut()}>
            <span>Log Out</span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
    )
}
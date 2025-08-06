'use client';
import {signOut} from "next-auth/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";


export default function LogOutButton({
                                         className = 'flex justify-around items-center border rounded-lg p-2 px-4 shadow'
                                     }) {
    return (
        <button
            className={className}
            onClick={() => signOut()}>
            <span>Log Out</span>
            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        </button>
    )
}
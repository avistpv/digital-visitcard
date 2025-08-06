'use client';

import grabUserName from "@/actions/grabUserName";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {redirect} from "next/navigation";
import SubmitButton from "@/components/buttons/SubmitButton";

export default function UserNameForm({preferredUsername = ""}) {
    const [taken, setTaken] = useState(false);


    // console.log(preferredUsername);
    async function handleSubmit(formData: FormData) {
        // console.log(formData.get("username"))
        const result = await grabUserName(formData);
        setTaken(result === false);
        if (result) {
            redirect('/account?created=' + formData.get('username'));
        }
    }

    return (
        <form action={handleSubmit}>
            <h1 className="text-4xl text-black font-bold text-center mb-2">
                Choose Your Username
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Choose your username
            </p>
            <div className="max-w-xs mx-auto">
                <input
                    name="username"
                    className="text-center block p-2 mx-auto border border-slate-200 w-full rounded-lg mb-2"
                    defaultValue={preferredUsername}
                    type="text" placeholder="username"/>
                {taken && (
                    <div
                        className="text-center border border-red-500 p-2 bg-red-200 mb-2 rounded-lg">
                        Username is already taken
                    </div>
                )}
                <SubmitButton>
                     <span>
                        Take your username
                        </span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </SubmitButton>
            </div>

        </form>
    );
}
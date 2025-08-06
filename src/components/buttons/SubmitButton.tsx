import {ReactNode} from "react";
import {useFormStatus} from "react-dom";

export default function SubmitButton({children}: {children: ReactNode}) {
    const {pending} = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="font-bold bg-blue-500 disabled:bg-blue-300
            text-white disabled:text-gray-500 py-2 px-4 border border-blue-200 shadow-lg
            w-full rounded-lg flex items-center justify-center gap-2"
        >
            {children}
        </button>
    );
}
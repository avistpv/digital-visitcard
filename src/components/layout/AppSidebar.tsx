'use client'

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong, faChartLine, faHouseUser} from "@fortawesome/free-solid-svg-icons";
import LogOutButton from "@/components/buttons/LogOutButton";
import {usePathname} from "next/navigation";

export default function AppSidebar() {
    const path = usePathname();
    console.log(path)
    return (
        // TODO#5 Toggle buttons - changing styles on clicked buttons
        <nav className="flex flex-col justify-center
                        mt-8 gap-4">
            <Link href={'/account'}
                  className="flex justify-around items-center gap-4
                          border rounded-2xl border-gray-400 py-2.5 px-6
                          shadow-md font-semibold text-gray-700">
                <FontAwesomeIcon icon={faHouseUser}
                                 className="text-green-700"/>
                <span className="text-ellipsis max-w-lg overflow-hidden whitespace-nowrap">
                    My page
                </span>
            </Link>
            <Link href={'/analytics'}
                  className="flex justify-around items-center gap-4
                          border rounded-2xl border-gray-400 py-2.5 px-6
                          shadow-md font-semibold text-gray-700">
                <FontAwesomeIcon icon={faChartLine}
                                 className="text-amber-600"/>
                <span className="text-ellipsis max-w-lg overflow-hidden whitespace-nowrap">
                    Analytics
                </span>
            </Link>
            {/*//TODO#3 Realigning LogOutButton - overriding styles*/}
            <LogOutButton
                className={'flex flex-row-reverse items-center gap-6 ' +
                    'border rounded-2xl border-red-400 py-2.5 px-6 ' +
                    'shadow-md font-semibold text-gray-700'}/>

            <Link href={'/'} className="flex justify-around items-center
                          border-t border-gray-300 py-2 px-2 mt-4
                          font-semibold text-xs text-gray-500">
                <FontAwesomeIcon icon={faArrowLeftLong}/>
                <span className="text-ellipsis max-w-lg overflow-hidden whitespace-nowrap">
                    Back to website
                </span>
            </Link>
            {/*TODO#4 Semi transparent menu with background ? and Dark mode switcher*/}
        </nav>
    )
}
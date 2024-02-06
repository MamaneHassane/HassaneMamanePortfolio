import React from "react";
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react';
import { cilCommentBubble, cilList } from '@coreui/icons';

const Header = () => {
    return(
        <header className="bg-cyan-900 sm:bg-white flex flex-row w-auto h-12 justify-center">
            <div className="flex w-10 sm:hidden mr-auto ml-2 mt-1">
                <Link className="mb-1 flex flex-row w-full items-center border-2 border-red-400 rounded-sm p-2 font-bold text-sm bg-red-400 ">
                    <text className="flex-shrink-0 hidden md:flex ">Let's talk</text>
                    <CIcon icon={cilList} size="sm" color="#fff" className="md:mt-1 md:ml-1"/>
                </Link>
            </div>
            <ul className="hidden sm:flex flex-row min-h-max ml-auto text-cyan-900 font-bold">
                <li className="flex items-center px-4  hover:text-cyan-400">
                    <Link to='/' className="">Home</Link>
                </li>
                <li className="flex items-center px-4  hover:text-cyan-400">
                    <Link className="">Education</Link>
                </li>
                <li className="flex items-center px-4  hover:text-cyan-400">
                    <Link className="">Projects</Link>
                </li>
                <li className="flex items-center px-4  hover:text-cyan-400">
                    <Link className="">Experience</Link>
                </li>
                <li className="flex items-center px-4  hover:text-cyan-400">
                    <Link className="">Fun</Link>
                </li>
            </ul>

            <div className="flex w-24 ml-auto mr-2 mt-1">
                <Link className="mb-1 flex flex-row w-full items-center border-2 rounded-lg py-0 px-1 font-bold text-sm hover:text-green-400 text-cyan-400 hover:bg-white bg-gray-100 ">
                    <text className="text-sm flex-shrink-0 flex">Let's talk</text>
                    <CIcon icon={cilCommentBubble} size="sm" className="mt-1 ml-1 w-12"/>
                </Link>
            </div>
        </header>
    )
}

export default Header;
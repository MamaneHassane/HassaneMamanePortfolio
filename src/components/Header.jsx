import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="flex flex-row w-auto h-12 justify-center">
            
            <ul className="flex flex-row min-h-max ml-auto text-cyan-900 font-bold">
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
            <div className="flex flex-nowrap ml-auto mr-2 mt-1">
                <Link className="flex flex-nowrap items-center border-2 rounded-lg p-2 font-bold text-sm hover:text-green-400 text-cyan-400 hover:bg-white bg-gray-100 ">Let's talk</Link>
            </div>
        </header>
    )
}

export default Header;
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import {
  cilCommentBubble,
  cilHappy,
  cilHome,
  cilLaptop,
  cilLayers,
  cilList,
  cilNotes,
} from "@coreui/icons";
import './Header.css'
const Header = () => {
  const [topBarVisible, setTopBarVisible] = useState(false);
  const toogleTopBar = () => {
    topBarVisible === true ? setTopBarVisible(false) : setTopBarVisible(true);
  };

  return (
    <>
      <header className="bg-cyan-900 sm:bg-white flex flex-row w-auto h-12 justify-center">
        <div className="flex w-10 sm:hidden mr-auto ml-2 mt-1">
          <button
            onClick={() => toogleTopBar()}
            className="mb-1 flex flex-row w-full items-center border-2 border-red-400 rounded-sm p-2 font-bold text-sm bg-red-400 "
          >
            <text className="flex-shrink-0 hidden md:flex ">Let's talk</text>
            <CIcon
              icon={cilList}
              size="sm"
              color="#fff"
              className="md:mt-1 md:ml-1"
            />
          </button>
        </div>

        <ul className="hidden sm:flex flex-row min-h-max ml-auto text-cyan-900 font-bold">
          <li className="flex items-center px-4  hover:text-cyan-400">
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li className="flex items-center px-4  hover:text-cyan-400">
            <a href="https://www.linkedin.com/in/hassane-mamane/">Education</a>
          </li>
          <li className="flex items-center px-4  hover:text-cyan-400">
            <Link className="" to={"/projects"}>Projects</Link>
          </li>
          <li className="flex items-center px-4  hover:text-cyan-400">
            <a href="https://www.linkedin.com/in/hassane-mamane/">Experience</a>
          </li>
          <li className="flex items-center px-4  hover:text-cyan-400">
            <Link className="" to={"/fun"}>Fun</Link>
          </li>
        </ul>

        <div className="flex w-24 ml-auto mr-2 mt-1">
          <button  className="mb-1 flex flex-row w-full items-center border-2 rounded-lg py-0 px-1 font-bold text-sm hover:text-green-400 text-cyan-400 hover:bg-white bg-gray-100 ">
            <a href="mailto:hassane.mamane017@gmail.com" className="text-sm flex-shrink-0 flex">Let's talk</a>
            <CIcon
              icon={cilCommentBubble}
              size="sm"
              className="mt-1 ml-1 w-12"
            />
          </button>
        </div>
      </header>

      {topBarVisible === true && (
        <ul 
            className="animate-slide-in h-auto sm:hidden bg-cyan-900 w-full text-white font-bold"
        >
          <li className="flex items-center px-1 border-b-2 hover:text-red-400 py-2">
            <Link to="/" className="flex flex-row items-center">
              <CIcon icon={cilHome} className="h-4 mx-1 text-red-400" />
              Home
            </Link>
          </li>
          <li className="flex items-center px-1 border-b-2 hover:text-red-400 py-2">
            <a className="flex flex-row items-center" href="https://www.linkedin.com/in/hassane-mamane/">
              <CIcon icon={cilNotes} className="h-4 mx-1  text-red-400" />
              Education
            </a>
          </li>
          <li className="flex items-center px-1 border-b-2 hover:text-red-400 py-2">
            <Link className="flex flex-row items-center" to={"/projects"}>
              <CIcon icon={cilLayers} className="h-4 mx-1  text-red-400" />
              Projects
            </Link>
          </li>
          <li className="flex items-center px-1 border-b-2 hover:text-red-400 py-2">
            <a className="flex flex-row items-center" href="https://www.linkedin.com/in/hassane-mamane/">
              <CIcon icon={cilLaptop} className="h-4 mx-1  text-red-400" />
              Experience
            </a>
          </li>
          <li className="flex items-center px-1 border-b-2 hover:text-red-400 py-2">
            <Link className="flex flex-row items-center" to={"/fun"}>
              <CIcon icon={cilHappy} className="h-4 mx-1  text-red-400" />
              Fun
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;

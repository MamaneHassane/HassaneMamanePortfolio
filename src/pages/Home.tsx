import * as React from "react";
// @ts-ignore
import Header from "../components/Header/Header.tsx";
// @ts-ignore
import Footer from "../components/Footer/Footer.tsx";
// @ts-ignore
import TechCard from "../components/TechCard/TechCard.tsx";
// @ts-ignore
import pexelsImage from "../images/pexels-kevin-bidwell-1373100.jpg";
// @ts-ignore
import dotnetImage from "../images/techs/dotnet_core.png";
// @ts-ignore
import angularImage from "../images/techs/angular.png";
// @ts-ignore
import dockerImage from "../images/techs/docker.png";
// @ts-ignore
import postgreImage from "../images/techs/postgresql.png";
// @ts-ignore
import sqlServerImage from "../images/techs/sqlserver.png";
// @ts-ignore
import azureDevopsImage from "../images/techs/azuredevops.png";
// @ts-ignore
import mongoImage from "../images/techs/mongo.png";
// @ts-ignore
import tailwindImage from "../images/techs/tailwind.png";
// @ts-ignore
import githubImage from "../images/techs/github.png";
// @ts-ignore
import springImage from "../images/techs/spring.png";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex flex-row w-screen h-auto transform-translate ease-in duration-500">
        <div className="hidden lg:flex flex-col mt-2 h-screen w-64"></div>
        <div className="flex flex-col mt-2 h-screen flex-auto w-screen">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2  my-1 mx-1">
            <div className="bg-white flex flex-1 flex-col md:justify-center md:my-1 mx-1">
              <text className="my-2 mx-4 text-md sm:text-2xl w-full font-bold text-cyan-900">
                Hello ! "It's a me", Hassane
                <br />
                I'm a {" "}
                <a
                  href="https://fr.wikipedia.org/wiki/D%C3%A9veloppeur_full_stack"
                  className="px-1 py-0 border-2 border-green-400 bg-green-400 text-white rounded-full cursor-pointer"
                >
                  full-stack
                </a>
                <br />
                engineer
              </text>

              <text className="mx-4 text-sm italic text-cyan-900">
                Junior and agile software engineer doing essentialy ASP.NET, Angular and Spring
              </text>
              <div className="flex flex-row mt-2 ml-2">
                <a
                  className="p-2  bg-indigo-900 text-white border-2 border-indigo-900 rounded-lg font-bold"
                  href="tel:+212 771-271002"
                >
                  Call me
                </a>
                <a
                  className="ml-2 p-2 bg-white text-indigo-900 hover:bg-gray-400 hover:text-white border-2 border-gray-400 rounded-lg font-bold"
                  href="https://github.com/MamaneHassane?tab=repositories"
                >
                  Projects
                </a>
                <button
                  className="ml-2 p-2 bg-white text-indigo-900 hover:bg-red-400 hover:text-white border-2 border-gray-400 hover:border-red-400 rounded-lg font-bold"
                >
                  <Link to="/cv">See CV</Link>
                </button>
              </div>
            </div>
            <div className="rounded-2xl flex flex-row justifiy-center sm:w-full my-1 mx-1">
              <img
                className="flex rounded-2xl object-fit w-full h-full"
                src={pexelsImage}
                alt="i_love_retro"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 h-1/2 mb-1 mx-1">
            <div className="bg-white flex flex-col my-1 mx-1">
              <div className="grid grid-cols-2 h-1/2">
                <text className="text-xl sm:text-2xl font-bold italic text-cyan-900 flex flex-col justify-center items-center">
                  +10 projects done
                </text>
                <text className="text-sm sm:text-md sm:font-bold italic text-cyan-900 flex flex-col justify-center items-center">
                  ⚙ Conception is the key for fastest and reliable softwares, technical skills are as much important 🛠⚒ 😉 !!
                </text>
              </div>

              <text className="flex flex-1 font-bold text-cyan-900 text-sm lg:text-md ml-2 my-2 items-center justify-center">
                My contact :{" "}
                <a
                  className="p-2 bg-red-400 mx-1 text-white text-sm lg:text-md rounded-full"
                  href="mailto:hassane.mamane017@gmail.com"
                >
                  hassane.mamane017@gmail.com
                </a>
              </text>
            </div>
            <div className="grid grid-cols-5">
              <TechCard image = {dotnetImage}/>
              <TechCard image = {springImage}/>
              <TechCard image = {angularImage}/>
              <TechCard image = {tailwindImage}/>
              <TechCard image = {githubImage}/>
              <TechCard image = {azureDevopsImage}/>
              <TechCard image = {sqlServerImage}/>
              <TechCard image = {mongoImage}/>
              <TechCard image = {postgreImage}/>
              <TechCard image = {dockerImage}/>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col mt-2 h-screen flex-auto w-64"></div>
      </div>
      <Footer />
    </div>
  );
};

export {
  Home
}


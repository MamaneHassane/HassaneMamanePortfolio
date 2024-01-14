import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col max-h-screen overflow-auto"> 
            <Header/>    
                <div className="flex flex-row w-screen h-screen">
                    <div className="flex flex-col mt-2 h-screen flex-auto w-64">

                    </div>
                    <div className="flex flex-col mt-2 h-screen flex-auto w-screen">
                        <div className="flex flex-row h-1/2 my-1 mx-1">
                            <div className="bg-white flex flex-col w-1/2 my-1 mx-1">
                                <text className="my-2 mx-4 text-2xl font-bold text-cyan-900">
                                    Hello ! Im a Hassane
                                    <br/>
                                    I'm a  <a href="https://fr.wikipedia.org/wiki/D%C3%A9veloppeur_full_stack" className="px-1 py-0 border-2 border-green-400 bg-green-400 text-white rounded-full cursor-pointer">full-stack</a>
                                    <br/>
                                    engineer
                                </text>
                               
                                

                                <text className="my-2 mx-4 text-2xl font-bold text-cyan-900">
                                    
                                </text>         
                            </div>
                            <div className="bg-white flex flex-row w-1/2 my-1 mx-1">

                            </div>
                        </div>
                        <div className="flex flex-row h-1/2 mb-1 mx-1">
                            <div className="bg-white flex flex-row w-1/2 my-1 mx-1">

                            </div>
                            <div className="bg-white flex flex-row w-1/2 my-1 mx-1">

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 h-screen flex-auto w-64">

                    </div>
                </div>
            <Footer/>    
        </div>
    )
}

export default Home;
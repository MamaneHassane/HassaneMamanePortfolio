import * as React from 'react';
// @ts-ignore
import {fields, languages} from "../constants/constants.ts";
import {useState} from "react";
import {Link} from "react-router-dom";
import {cilArrowLeft} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const CurriculumVitae = () => {
    // The langage you want to see the CV
    const [language,setLanguage] = useState(languages.en)
    const handleLanguageChange = (event : any) => {
        event.preventDefault();
        setLanguage(event.target.value);
    }
    // The field you want to see the CV
    // const [field,setField] = useState(fields.dnt_ang)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleFieldChange = (event : any) => {
        event.preventDefault();
        // setField(event.target.value);
    }
    return (
        <div className={"overflow-hidden"}>
            <button
                className="flex flex-row p-2 mt-1 mx-2 justify-center items-center hover:bg-white hover:text-red-500 bg-red-500 text-white rounded-lg font-bold"
            >
                <Link
                    className="flex flex-row items-center"
                    to="/"
                >
                    <CIcon icon={cilArrowLeft} className="h-4 mx-1 text-blue" />
                </Link>
            </button>
            <div className={"flex flex-row gap-2 p-2 w-full"}>
                <select
                    name={language}
                    onChange={(event) => handleLanguageChange(event)}
                    className={"w-1/2 p-2 rounded-md bg-pink-500 text-white"}
                >
                    <option
                        value={languages.fr}
                    >
                        Français
                    </option>
                </select>
            </div>
            <div
                className={"flex flex-col lg:flex-row gap-2 mx-2 items-center justify-center"}
            >
                <div>
                    <img
                        className={"w-full h-full object-contain"}
                        src={require(`../images/cv/french/1.png`)}
                        alt={"My Curriculum vitae"}
                    />
                </div>
            </div>
        </div>
    )
}

export {
    CurriculumVitae
}
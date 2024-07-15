import * as React from 'react';
// @ts-ignore
import {fields, languages} from "../constants/constants.ts";
import {useState} from "react";

const CurriculumVitae = () => {
    // The langage you want to see the CV
    const [language,setLanguage] = useState(languages.en)
    const handleLanguageChange = (event : any) => {
        event.preventDefault();
        setLanguage(event.target.value);
    }
    // The field you want to see the CV
    const [field,setField] = useState(fields.dnt_ang)
    const handleFieldChange = (event : any) => {
        event.preventDefault();
        setField(event.target.value);
    }
    return (
        <div>
            <div className={"flex flex-row gap-2 p-2 w-full"}>
                <select
                    name={language}
                    onChange={(event)=>handleLanguageChange(event)}
                    className={"w-1/2 p-2 rounded-md bg-pink-500 text-white"}
                >
                    <option
                        value={languages.en}
                    >
                        English
                    </option>
                    <option
                        value={languages.fr}
                    >
                        Français
                    </option>
                </select>

                <select
                    name={field}
                    onChange={(event)=>handleFieldChange(event)}
                    className={
                        field === fields.spr_rct ?
                        "w-1/2 p-2 rounded-md bg-green-500 text-white"
                        :
                        "w-1/2 p-2 rounded-md bg-indigo-500 text-white"
                }>
                    <option
                        value={fields.dnt_ang}
                    >
                        Dotnet/Angular
                    </option>
                    <option
                        value={fields.spr_rct}
                    >
                        Spring/React
                    </option>
                </select>

            </div>
            <div
                className={"flex flex-col lg:flex-row gap-2 mx-2 items-center justify-center"}
            >
                <div>
                    <img
                        className={"w-full h-full object-contain"}
                        src={require(`../images/cv/${language}/${field}/1.jpg`)}
                        alt={"My Curriculum vitae"}
                    />
                </div>

                <div>
                    <img
                        className={"w-full h-full object-contain"}
                        src={require(`../images/cv/${language}/${field}/2.jpg`)}
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
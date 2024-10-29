import * as React from "react"

const TechCard = ({image}) => {
    return (
        <div className="bg-white flex flex-row flex-shrink my-1 mx-1">
            <div className="ml-2 rounded-full w-18 h-18 md:w-24 md:h-24">
                <img
                src={image}
                alt=""
                className="rounded-full w-full h-full object-contain flex"
                />
            </div>
        </div>
    )
}

export default TechCard


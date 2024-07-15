import * as React from "react"

const TechCard = ({image}) => {
    return (
        <div className="bg-white flex flex-row flex-shrink my-1 mx-1">
            <div className="ml-2 rounded-full w-16 h-16 md:w-18 md:h-18">
                <img
                src={image}
                alt=""
                className="rounded-full w-full h-full object-cover flex"
                />
            </div>
        </div>
    )
}

export default TechCard


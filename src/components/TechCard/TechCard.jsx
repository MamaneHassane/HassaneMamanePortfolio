import React from "react"

const TechCard = ({image}) => {
    return (
        <div className="bg-white flex flex-row flex-shrink my-1 mx-1">
            <div className="ml-2 rounded-full w-20 h-20 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-24 xl:h-24">
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


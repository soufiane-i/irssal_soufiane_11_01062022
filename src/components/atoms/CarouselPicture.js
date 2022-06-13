import React from "react";
import "./CarouselPicture.css"

export default function CarouselPicture(picture) {
    return(
        <>
        <img src={`${picture}`} className="photo off" key={picture}/>
        </>
    )
}
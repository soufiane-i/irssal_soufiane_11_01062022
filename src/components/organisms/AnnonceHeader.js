import React from "react";
import "./AnnonceHeader.css"
import Profile from "../molecules/Profile";
import Rating from "../molecules/Rating";

export default function AnnonceHeader({title, tags, rating, location, host}) {

    return(
        <>
        <div className="annonceHeader">
            <div className="left">
                <h1 className="h1" >{title}</h1>
                <h2 className="location">{location}</h2>
                <div className="tags"> {tags.map((tag) => 
                    <div className="tag" key={tag}>{tag}</div>)} </div>
                </div>
            <div className="right">
                <Profile host={host}/>
                <Rating rating={rating}/>
            </div>
        </div>
        </>
    )
}
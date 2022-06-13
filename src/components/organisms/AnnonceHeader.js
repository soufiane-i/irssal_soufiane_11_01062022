import React from "react";
import "./AnnonceHeader.css"
import Tag from "../atoms/Tag";
import Profile from "../molecules/Profile";
import Rating from "../molecules/Rating";

export default function AnnonceHeader({title, tags, rating, location, host}) {

    console.log(rating);


    return(
        <>
        <div className="annonceHeader">
            <div className="left">
                <h1 className="h1" >{title}</h1>
                <h2 className="location">Paris, Île-de-France</h2>
                <div className="tags"> {tags.map(Tag)} </div>
            </div>
            <div className="right">
                <Profile host={host}/>
                <Rating rating={rating}/>
            </div>
        </div>
        </>
    )
}
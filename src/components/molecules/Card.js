import React from "react"
import "./Card.css"


export default function Card({cover, title, id}) {
    return(
        <>
        
            <a href={`/fiche/` + id} className="card" key={id} >
                <img src={cover} className="card_img"/>
                <span className="card_title">{`${title}`}</span>
            </a>
</>
    )
}
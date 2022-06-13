import React from "react"
import "./Card.css"

import {Link} from 'react-router-dom'

export default function Card({cover, title, id}) {
    return(
        <>
        
            <Link to={`/Fiche/` + id} className="card" key={id} >
                <img src={cover} className="card_img"/>
                <span className="card_title">{`${title}`}</span>
            </Link>
</>
    )
}
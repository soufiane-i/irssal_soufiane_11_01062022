import React from "react"
import './Banner.css'


export default function Banner({text, img}) {
    return(
        <>
         <section className="banner">
            <img className="mainHeader_bg" src={`/assets/${img}.png`} alt="banner"/>
            <p>{text}</p>
         </section>
        </>
    )
}
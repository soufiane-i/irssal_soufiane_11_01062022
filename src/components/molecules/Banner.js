import React from "react"
import './Banner.css'


export default function Banner({text}) {
    return(
        <>
         <section className="banner">
            <img className="mainHeader_bg" src="/assets/mainHeaderBg.png"/>
            <p>{text}</p>
         </section>
        </>
    )
}
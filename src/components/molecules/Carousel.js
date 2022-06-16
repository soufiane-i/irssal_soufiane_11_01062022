import React, { useEffect } from "react";
import "./Carousel.css"
import Arrows from "./Arrows";


export default function Carousel({pictures}) {

    useEffect(() => { 
      const first = document.querySelectorAll(".photo")
      const arrows = document.querySelector(".arrows")

      first[0].classList.remove("off")
      first[0].classList.add("on")

      if (first.length === 1) {
        arrows.classList.add("off")
      }
      })
    
    return (
        <>
            <div className="carousel">
                <div className="carouselContainer">
                    { pictures.map((picture) =>
                        <img src={`${picture}`} className="photo off" alt="carousel" key={picture}/>
                    ) }
                </div>
                <Arrows/>
            </div>
        </>
    )
}




  

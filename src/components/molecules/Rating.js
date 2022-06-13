import './Rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export default function Rating({rating}) {

    useEffect(() => { 
        const stars = document.querySelectorAll(".star")
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add("starOn")
        }
        })
        const size = "lg"
    return(
        <>
            <div className="stars">
                <FontAwesomeIcon icon={faStar} size={size} className="star" />
                <FontAwesomeIcon icon={faStar} size={size} className="star" />
                <FontAwesomeIcon icon={faStar} size={size} className="star" />
                <FontAwesomeIcon icon={faStar} size={size} className="star" />
                <FontAwesomeIcon icon={faStar} size={size} className="star" />
            </div>
        </>
    )
}
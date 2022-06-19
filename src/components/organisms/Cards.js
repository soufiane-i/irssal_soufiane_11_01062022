import "./Cards.css"
import logements from "../../logements.json"
import "../molecules/Card.css"
import Card from "../molecules/Card"

export default function Cards() {

    return(
        <>
                <ul className="cards">
                {logements.map((logement) =>    
                Card(logement))}
                </ul>
        </>
    )
}
import "./Cards.css"
import Card from "../molecules/Card";
import logements from "../../logements.json"

export default function Cards() {


    return(
        <>
                <div className="cards">
                {logements.map(Card)}
                </div>
        </>
    )
}
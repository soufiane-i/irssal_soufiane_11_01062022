import "./Cards.css"
import logements from "../../logements.json"
import "../molecules/Card.css"

export default function Cards() {

    return(
        <>
                <ul className="cards">
                {logements.map((logement) =>     
                <a href={`/fiche/` + logement.id} className="card_href" key={logement.id}>    
                <li className="card" >
                    
                        <img src={logement.cover} className="card_img" alt="cover" key={logement.id} />
                        <span className="card_title">{`${logement.title}`}</span>
                   
                </li>
                </a>)}
                </ul>
        </>
    )
}
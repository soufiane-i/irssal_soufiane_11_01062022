export default function Card(logement) {
    return(
        <a href={`/fiche/` + logement.id} className="card_href" key={logement.id}>    
                <li className="card" >
                    
                        <img src={logement.cover} className="card_img" alt="cover" key={logement.id} />
                        <span className="card_title">{`${logement.title}`}</span>
                   
                </li>
                </a>
    )
}
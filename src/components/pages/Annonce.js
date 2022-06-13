import Header from "../organisms/Header";
import logements from "../../logements.json"
import HousingRecord from "../organisms/HousingRecord";

import { useParams } from "react-router-dom";

export default function Annonce() {
    const params = useParams();
    const logement = logements.find(el => el.id === params.id)
    return(
        <>
            <Header/>
            <main>
                <HousingRecord logement={logement}/>
            </main>
        </>
    )
}

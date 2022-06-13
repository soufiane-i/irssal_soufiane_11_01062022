import Header from "../organisms/Header";
import logements from "../../logements.json"
import HousingRecord from "../organisms/HousingRecord";
import Footer from "../molecules/Footer"
import Error404Page from './Error404Page'

import { useParams } from "react-router-dom";

export default function Annonce() {
    const params = useParams();
    const logement = logements.find(el => el.id === params.id)

    if (logement === undefined) {
        return(
            <Error404Page/>
        )
    } else {
        return(
            <>
                <Header/>
                <main>
                    <HousingRecord logement={logement}/>
                </main>
                <Footer/>
            </>
        )
    }

}

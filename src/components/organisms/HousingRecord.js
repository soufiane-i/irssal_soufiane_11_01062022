import Carousel from "../molecules/Carousel";
import AnnonceHeader from "./AnnonceHeader";
import DropDowns from "./DropDowns";

export default function HousingRecord({logement}) {
    return(
        <>
            <Carousel pictures={logement.pictures}/>
            <AnnonceHeader title={logement.title} tags={logement.tags} rating={logement.rating} location={logement.location} host={logement.host}/>
            <DropDowns classType={"logement"} equipements={logement.equipments} description={logement.description}/>
        </>
    )
}
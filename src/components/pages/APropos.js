import Banner from "../molecules/Banner";
import Header from "../organisms/Header";
import DropDown from "../molecules/DropDown"
import Footer from "../molecules/Footer"

export default function APropos() {
    return(
        <>
            <Header/>
            <main>
                <Banner img="aproposBg"/>
                <DropDown title="Fiabilité" classType={`apropos`} infos="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                <DropDown title="Respect" classType={`apropos`} infos="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <DropDown title="Service" classType={`apropos`} infos="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <DropDown title="Sécurité" classType={`apropos`} infos="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </main>
            <Footer/>
        </>
    )
}
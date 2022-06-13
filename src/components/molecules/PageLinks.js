import './PageLinks.css'
import PageLink from "../atoms/PageLink"


export default function PageLinks() {
    return(
        <>
            <nav className="header_right">
                <PageLink text="Accueil" link="/"/>
                <PageLink text="A propos" link="/apropos"/>
            </nav>
        </>
    )
}
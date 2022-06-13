import { Link } from "react-router-dom";
import './Error404.css'

export default function error404() {
    return(
        <>
            <div className="error4O4">
                <h1 >404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to={'/'} className="href">Retourner sur la page d’accueil</Link>
            </div>
        </>
    )
}
import './Error404.css'

export default function error404() {
    return(
        <>
            <div className="error4O4">
                <h1 >404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <a href="/" className="href404">Retourner sur la page d’accueil</a>
            </div>
        </>
    )
}
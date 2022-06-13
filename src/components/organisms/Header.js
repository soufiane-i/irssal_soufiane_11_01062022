import './Header.css'

import PageLinks from '../molecules/PageLinks'
import Logo from "../atoms/Logo"

export default function Header() {
    return(
        <>
        <header>
            <Logo/>
            <PageLinks/>
        </header>
        </>
    )
}
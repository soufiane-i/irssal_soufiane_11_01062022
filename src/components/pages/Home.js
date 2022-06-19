import Header from "../organisms/Header"
import Banner from "../molecules/Banner"
import Cards from "../organisms/Cards"
import Footer from "../molecules/Footer"

export default function Home() {
    return(
        <>
            <Header/>
            <main>
                <Banner text="Chez vous, partout et ailleurs" img="mainHeaderBg"/>
                <Cards/>
            </main>
            <Footer/>
        </>
    )
}
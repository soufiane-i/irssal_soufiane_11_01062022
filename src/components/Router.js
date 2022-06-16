import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom' 

import Home from './pages/Home';
import Annonce from './pages/Annonce';
import Error404Page from "./pages/Error404Page";
import APropos from "./pages/APropos";


export default function Router() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/fiche/:id' element={<Annonce/>} />
                <Route path='/apropos' element={<APropos/>} />
                <Route path='/*' element={<Error404Page/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
import React from "react";
import {Routes, Route} from 'react-router-dom' 

import Home from './pages/Home';
import Annonce from './pages/Annonce';
import Error404Page from "./pages/Error404Page";


export default function Router() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Fiche/:id' element={<Annonce/>} />
                <Route path='/*' element={<Error404Page/>} />
            </Routes>
        </>
    )
}
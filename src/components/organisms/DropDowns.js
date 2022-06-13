import React from "react";
import DropDown from "../molecules/DropDown";
import './DropDowns.css'


export default function DropDowns({equipements, description}) {

    return(
        <>
            <div className="dropDowns">
                <DropDown title="Description" infos={description}/>
                <DropDown title="Equipements" infos={equipements}/>
            </div>
        </>
    )
}

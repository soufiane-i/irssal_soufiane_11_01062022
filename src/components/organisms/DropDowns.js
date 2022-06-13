import React from "react";
import DropDown from "../molecules/DropDown";
import './DropDowns.css'


export default function DropDowns({equipements, description, classType}) {

    return(
        <>
            <div className="dropDowns">
                <DropDown title="Description" infos={description} classType={classType}/>
                <DropDown title="Equipements" infos={equipements} classType={classType}/>
            </div>
        </>
    )
}

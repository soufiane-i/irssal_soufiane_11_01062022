import React from "react";
import "./DropDown.css"


export default function DropDown({title, infos}) {
    console.log(typeof(infos));
    let infosDom
    if (typeof(infos) == "string") {
        infosDom = <li className="dropDownContent">{infos}</li>           
    } else {
        infosDom = infos.map(DropDownContent)
    }
    return(
        <>
          <div className="dropDown">
            <div className="head">
               <span className="headTitle">{title}</span>
               <img className="arrow" src="/assets/arrow.png"/> 
            </div>
            <ul className="body">
                 {infosDom} 
            </ul>
          </div>
        </>
    )
}

function DropDownContent(info) {
    return(
        <>
            <li className="dropDownContent">{info}</li>
        </>
    )
}
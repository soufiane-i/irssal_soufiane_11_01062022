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
          <div className="dropDown" >
            <div className="head">
               <span className="headTitle">{title}</span>
               <img className="arrowDropDown arrowOn" src="/assets/arrow.png" onClick={DropDownInteraction}/> 
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



function DropDownInteraction(e) {
    const arrow = e.target
    const body = e.target.parentNode.parentNode.childNodes[1]

    console.log(arrow);

    if (arrow.classList.contains('arrowOn')) {
        arrow.classList.toggle('arrowOn')
        arrow.classList.toggle('arrowOff')
        body.classList.add('off')
    } else {
        arrow.classList.toggle('arrowOn')
        arrow.classList.toggle('arrowOff')
        body.classList.remove('off')
    }

}
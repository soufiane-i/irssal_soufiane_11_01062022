import React from "react";
import style from "./PageLink.css"

export default function PageLink({text, link}) {
    return (
        <a href={link} className="link">{text}</a>
    )
}
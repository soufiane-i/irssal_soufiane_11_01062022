import React from "react";
import {Link} from 'react-router-dom'
import style from "./PageLink.css"

export default function PageLink({text, link}) {
    return (
        <Link className="link" to={link}>{text}</Link>
    )
}
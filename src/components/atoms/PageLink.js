import React from "react";

export default function PageLink({text, link}) {
    return (
        <a href={link} className="link">{text}</a>
    )
}
import React from "react";

export function Paragraphe ( {children}:any ) {
    return (
        <p dangerouslySetInnerHTML={{ __html : `${children}`}} />
    )
}
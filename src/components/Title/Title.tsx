import React from "react";


export function Title ( {title}:any) {
    console.log('Title : ', title)
    return (
        <h1 dangerouslySetInnerHTML={{ __html : `${title}` }} style={{ marginBottom: 40 }} />
    )
}
import React, { useEffect, useState } from 'react';
import { mockNav, ContentProps } from '../data/mockContent';
import { useParams } from 'react-router-dom';


export function Page () {

    console.log('PAGE')
    const { docTitle } = useParams()
    const [content,setContent] = useState<ContentProps[]>([]);

    useEffect( () => {
        const currentContent = mockNav.filter( item => {
            let { content, subTitle, url } = item
            if(!subTitle && url === docTitle) {
                return item.content
            }
            return null
        });
        console.log(docTitle, currentContent)
    },[docTitle])

    return (
        <div>
            {
                content?.map( c => c.paragraphe )
            }
        </div>
    )
}
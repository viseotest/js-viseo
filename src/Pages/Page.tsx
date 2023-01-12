import React, { useEffect, useState } from 'react';
import { mockNav, ContentProps } from '../data/mockContent';
import { useParams, useSearchParams } from 'react-router-dom';

import { Block } from '../components/Block/Block'

export function Page () {

    const { docTitle } = useParams()
    const [urlParam] = useSearchParams()
    const [contents,setContent] = useState<ContentProps[] | null>(null);


    function getArticle () {
        const getDataWithUrlParam = mockNav.filter( item => item.url === docTitle )[0]
        const getDataWithCodeParam = mockNav.filter( item => item.code === urlParam.get('view') )[0]
        
        if (getDataWithUrlParam) setContent( getDataWithUrlParam.content || null )
        if (getDataWithCodeParam) setContent( getDataWithCodeParam.subTitle?.filter( item => item.url === docTitle )[0]?.content || null )
    }

    useEffect( () => {
        getArticle()
    },[docTitle] )

    if (contents) return ( 
        <div style={{ marginTop: 110 }}>            
            { contents.map( 
                (content,key) => 
                    <aside key={key} style={{ marginBottom: 20 }}>
                        <Block {...content} />
                    </aside>
                )
            }
        </div> 
    )
    if (contents === undefined) return ( <>loading...</> )
    return <NotFoundArticle />
}





function NotFoundArticle () {
    return (
        <div>
            Article Not Found
        </div>
    )
}
import React from 'react'
import { Title } from '../Title/Title'
import { Paragraphe } from '../Paragraphe/Paragraphe'
import { CodeBlockSnippet } from '../HighLighter/HighLighter'

const components:any = {
    titlePage: Title,
    blockPage: BlockContent,
    codeBlock:  CodeBlockSnippet
}

export function Block (cmp: any, key: number) {
    const Component = components[cmp.component]
    return (
        <Component {...cmp} />
    )
}


function BlockContent ( {title,paragraphe}:any ) {
    console.log('BLOCKCONTENT : ', title, paragraphe)
    return (
        <>  
            { title ?
                <h3 style={{ marginBottom: 20 }}>
                    {title}
                </h3> : null
            }
            <Paragraphe>
                {paragraphe}
            </Paragraphe>
        </>
    )
}
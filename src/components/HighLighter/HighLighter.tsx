import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as backGroundStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';



export interface CodeBlockProps {
    lang: string,
    codeSnippet: string,
    showLineNumber?: boolean
}

export function CodeBlockSnippet ( { lang, codeSnippet, showLineNumber = false } : CodeBlockProps ) {
    console.log(backGroundStyle)
    return (
        <SyntaxHighlighter language={`${lang}`} style={backGroundStyle} className={'pre-style'}>
            {`${codeSnippet}`}
        </SyntaxHighlighter>
    )
}

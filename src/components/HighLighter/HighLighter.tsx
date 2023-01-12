import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneSea as backGroundStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';


export interface CodeBlockProps {
    lang: string,
    codeSnippet: string,
    showLineNumber?: boolean
}

export function CodeBlockSnippet ( { lang, codeSnippet, showLineNumber = false } : CodeBlockProps ) {
    return (
        <SyntaxHighlighter language={`${lang}`} style={backGroundStyle} className={'pre-style'} showLineNumbers={showLineNumber} wrapLines={true}>
            {`${codeSnippet}`}
        </SyntaxHighlighter>
    )
}

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as backGroundStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Button from 'react-bootstrap/Button'
import { FiPaperclip as IconeClip } from 'react-icons/fi'


export interface CodeBlockProps {
    lang: string,
    codeSnippet: string,
    showLineNumber?: boolean
}

export function CodeBlockSnippet ( { lang, codeSnippet, showLineNumber = false } : CodeBlockProps ) {
    return (
        <div style={{ position: 'relative' }}>  
            <SyntaxHighlighter language={`${lang}`} style={backGroundStyle} className={'pre-style'}>
                {`${codeSnippet}`}
            </SyntaxHighlighter>
            { lang === 'jsx' ? <ClipBoardButton code={codeSnippet} /> : null }
            
        </div>
    )
}

function ClipBoardButton ({code}:any) {

    function clipboardEvent ( e:any ) {
        navigator.clipboard.writeText(`${code}`);
    }

    return (
        <div style={{ position: 'absolute', top:0, right: 0 }}>            
            <Button variant='purple' style={{ fontSize: '.8rem'}} onClick={clipboardEvent}>
                Copy <IconeClip />
            </Button>
        </div>
    )
}

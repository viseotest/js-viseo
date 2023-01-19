import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import { CodeBlockSnippet } from '../components/HighLighter/HighLighter';

export function Page () {

    const { docTitle } = useParams()
    const [loading,isLoading] = useState<boolean>(false);
    const [post,setPost] = useState<any>(undefined); 

    useEffect( () => {
        async function getResource (){
            isLoading(true)
            try{
                const fileMD = await import(`data/${docTitle}.md`)
                const result = await axios.get(fileMD.default)
                setPost(result.data)
            }
            catch(Exception) {
                setPost(undefined)
            }
            isLoading(false)
        }
        getResource()
    },[docTitle]) 

    if (loading) return (
        <LayoutArticle isClassic>
            <h1>Wait before loading...</h1>
        </LayoutArticle>
    )
    if (post) return (
            <LayoutArticle>
                <ReactMarkdown
                    children={post}
                    components={{
                        h3: ({node,className, children, ...props}) => {
                            const titleName:any = children[0]
                            const dynamicAnchor = titleName.replaceAll(' ', '-').toLowerCase()
                            return (
                                <h3 id={dynamicAnchor}>
                                    <a href={`#${dynamicAnchor}`} className="anchor-url">#</a>
                                    {children}
                                </h3>
                            )  
                        },
                        code: ({node, inline, className, children, ...props}) => {
                            console.log(node)
                            const language = className?.split('-')[1]
                            if (!language) {
                                return (
                                    <span className='inline-block'>
                                        {`${children}`}
                                    </span>
                                )
                            } else {
                                return (
                                    <CodeBlockSnippet lang={`${language}`} codeSnippet={`${children}`} />
                                )
                            }
                        }
                    }}
                />
            </LayoutArticle>
        )
    return (
        <LayoutArticle isClassic>
            <ArticleNotFound />
        </LayoutArticle>
    )
}

function LayoutArticle ( { isClassic = false, children} : any ) {
    return (
        <section className={isClassic ? 'html-section' : 'md-section'} style={{ marginTop: 60 }}>
            {children}
        </section>
    )
}

function ArticleNotFound () {
    return (
        <h1>
            Oops ! Article pas trouvé
        </h1>
    )
}
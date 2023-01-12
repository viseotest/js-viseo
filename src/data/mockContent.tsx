export interface ContentProps {
    title?: string,
    component: string,
    paragraphe?: string
}

export interface DataProps {
    url?: string,
    title: string,
    content?: ContentProps[]
    code?: string | null,
    subTitle?: DataProps[]
}


export const mockNav = [
    { 
        title: "Javascript",
        url: "javascript",
        content: [
            {
                component: "titlePage",
                title: "A propos du Javascript"
            },
            {
                component: "blockPage",
                title: "Le seul langage de script côté navigateur",
                paragraphe: "Si votre objectif est de rendre vos pages interactives alors vous n'avez pas trop le choix, le JavaScript est un passage obligé car c'est le seul langage de script compris par les navigateurs. Il existe certes des initiatives permettant de convertir d'autres langages de programmation en JavaScript mais ce n'est pas forcément une méthode pérenne ni simple pour créer des interactions sur une page web."
            },
            {
                component: "codeBlock",
                lang: "html",
                codeSnippet: "<script>\n //une balise script \n</script>",
                showLineNumber: true
            },
            {
                component: "blockPage",
                title: "Un langage, plusieurs environnement",
                paragraphe: "Même si le langage a d'abord été conçu pour les navigateurs web, il peut aujourd'hui être utilisé dans d'autres environnements. Il est par exemple possible d'utiliser NodeJS pour éxécuter du code JavaScript directement sur un ordinateur pour intéragir avec le système (lecture/écriture de fichiers, création de serveur web...). L'apprentissage du langage JavaScript est particulièrement intéréssant car il vous permet avec une seule base de pouvoir avoir plusieurs types d'utilisations."
            },
            {
                component: "blockPage",
                paragraphe: "Cette polyvalence permet aussi de disposer d'un écosystème conséquent avec de nombreuses librairies et une communauté importante qui permet de trouver facilement de l'aide en cas de problème."
            }

        ]
    },
    { title: "Standardisation du Javascript (ECMA)", url: "standardisation-javascript", content: [
        {
            component: "titlePage",
            title: "JavaScript et EcmaScript <sup><a href='www.ecma-international.org/publications-and-standards/standards/ecma-262/' style='font-size:.9rem;'>(ecma website)</a></sup>"
        },
    ] },
    { 
        title: "Language oriente object (prototype)",
        code: "loo",
        subTitle: [
            { title: "Les Variables & Scopes", url: "variables-scopes", content: []},
            { title: "Types object", url: "types-object", content: [] },
            { title: "Array function", url: "array-function", content: [] },
            { title: "Les Promises", url: "promises", content: [] },
            { title: "La Sucre Syntaxe", url: "sucre-syntaxe", content: [] },
        ]
    },
    { 
        title: "Manipulation du DOM",
        code: "mdd",
        subTitle: [
            { title: "Les selecteurs", url: "html-selecteur", content: [] },
            { title: "Event listener", url: "event-listener", content: [] },
            { title: "Les templates", url: "html-template", content: [] },
        ]
    },
];
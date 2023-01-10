export interface NavItemProps {
    widthConfig: number
}

export interface ContentProps {
    title: string,
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
                component: "bigtitle",
                title: "A propos du Javascript"
            },
            {
                component: "block",
                title: "Le seul langage de script côté navigateur",
                paragraphe: "Si votre objectif est de rendre vos pages interactives alors vous n'avez pas trop le choix, le JavaScript est un passage obligé car c'est le seul langage de script compris par les navigateurs. Il existe certes des initiatives permettant de convertir d'autres langages de programmation en JavaScript mais ce n'est pas forcément une méthode pérenne ni simple pour créer des interactions sur une page web."
            }
        ]
    },
    { title: "Standardisation du Javascript (ECMA)", url: "standardisation-javascript" },
    { 
        title: "Language oriente object (prototype)",
        code: "loo",
        subTitle: [
            { title: "Les Variables & Scopes", url: "variables-scopes" },
            { title: "Types object", url: "types-object" },
            { title: "Array function", url: "array-function" },
            { title: "Les Promises", url: "promises" },
            { title: "La Sucre Syntaxe", url: "sucre-syntaxe" },
        ]
    },
    { 
        title: "Manipulation du DOM",
        code: "mdd",
        subTitle: [
            { title: "Les selecteurs", url: "html-selecteur" },
            { title: "Event listener", url: "event-listener" },
            { title: "Les templates", url: "html-template" },
        ]
    },
];
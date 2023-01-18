export interface DataProps {
    url?: string,
    title: string,
    code?: string | null,
    subTitle?: DataProps[]
}


export const navItem = [
    { 
        title: "Language Script",
        url: "javascript",
    },
    { 
        title: "Standardisation du Javascript (ECMA)",
        url: "standardisation-javascript", },
    { 
        title: "Language oriente object (prototype)",
        code: "loo",
        subTitle: [
            { title: "Les Variables & Scopes", url: "variables-scopes"},
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
    { 
        title: "Lightning Web",
        url: "lightning-web-component",
    },
];
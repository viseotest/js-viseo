# **Standardisation du language**

ECMAScript est un langage de programmation de type script standardisé par Ecma International dans le cadre de la spécification ECMA-262. Il s'agit donc d'un standard dont les spécifications sont implémentées dans la plupart des langages script, comme JavaScript ou ActionScript. Les dernières spécifications, en cours de développement, en font un véritable langage de programmation orienté objet.


## **Survol des technologies JavaScript**
### Introduction

HTML est utilisé pour définir la structure et le contenu d'une page web, CSS permet de définir la mise en forme, le style graphique avec lequel afficher le contenu. JavaScript permet quant à lui d'ajouter des fonctionnalités d'interaction pour créer des applications web riches en contenu.

Cependant, le terme « JavaScript » au sens large regroupe divers éléments très différents : le langage cœur (ECMAScript) d'une part et les API Web d'autre part et notamment le DOM (Document Object Model, ou Modèle d'Objet du Document).

JavaScript, le langage (ECMAScript)
Le langage JavaScript (au sens strict) est standardisé par le comité ECMA TC39 sous la forme d'un langage intitulé ECMAScript.

Ce langage est aussi utilisé dans des environnements différents des navigateurs web, comme par exemple dans node.js.

Quelles sont les caractéristiques d'ECMAScript?
Entre autres choses, ECMAScript définit :

La syntaxe du langage (règles d'interprétation (parsing), mots-clés, flux d'instructions, initialisation littérale d'objets...)
- Le mécanisme de traitement d'erreurs (throw, try...catch capacité qu'a l'utilisateur de créer des types d'erreurs personnalisés)
- Les types de variables (booléen, nombre, chaîne de caractères, fonction, objet...)
- L'objet global. Dans l'environnement d'un navigateur, cet objet global est l'objet window. ECMAScript ne définit ici que les API accessibles depuis l'objet global (peu importe l'environnement qui peut être différent d'un navigateur) (par exemple parseInt(), parseFloat(), decodeURI(), encodeURI()...)
- Le mécanisme d'héritage basé sur le concept de prototype
- Les objets et fonctions natifs (JSON, Math, méthodes de Array.prototype, méthodes d'introspection d'Object...)
- Le mode strict.

### Support des navigateurs

En octobre 2016, les versions actuelles des principaux navigateurs web supportent ECMAScript 5.1 et ECMAScript 2015 (aussi appelé ES6) mais certaines anciennes versions n'implémentent que ECMAScript 5.

### Futur

La sixième édition majeure d'ECMAScript a été officiellement approuvée et publiée en tant que standard le 17 juin 2015 par l'assemblée générale ECMA. Depuis cette édition, les éditions ECMAScript sont publiées à un rythme annuel.

### API d'internationalisation

La spécification ECMAScript pour l'API d'internationalisation est un ajout à la spécification du langage ECMAScript, également standardisée par ECMA TC39. L'API d'internationalisation ajoute la collation (c'est-à-dire la comparaison entre chaînes de caractères), le formatage de nombres, dates et heures dans les applications JavaScript en prenant en compte la locale de l'utilisateur pour fournir le meilleur format. Le standard initial a été aprouvé en décembre 2012 ; le statut de son implémentation dans les différents navigateurs est disponible sur la page de l'objet Intl. La spécification d'internationalisation est également ratifiée annuellement et les navigateurs améliorent leur implémentation au fur et à mesure.

## **Les API du DOM (Document Object Model)**

### WebIDL
La spécification WebIDL fournit le lien entre les technologies DOM et ECMAScript.

### Le cœur du DOM

Le Modèle d'Objet du Document (Document Object Model ou DOM en anglais) est une convention multi-plateforme, indépendante du langage utilisée pour représenter et interagir avec les objets dans les documents HTML, XHTML et XML. Les objets de l'arbre du DOM peuvent être accédés et manipulés en utilisant des méthodes sur les objets. Les fonctionnalités principales du DOM sont standardisées par le W3C. Il définit les interfaces offertes par les documents HTML et XML sans cibler un langage de manipulation précis. Parmi les éléments définis par le DOM, on peut trouver:

- La structure du document, un modèle d'arbre et l'architecture d'événements DOM dans le noyau DOM : Node, Element, DocumentFragment, Document, DOMImplementation, Event, EventTarget, …
- Une définition moins rigoureuse de l'architecture d'événements DOM, ainsi que des événements spécifiques avec les événements DOM.
- D'autres éléments tels que le DOM Traversal et le DOM Range.

Du point de vue d'ECMAScript, les objets définis dans la spécification DOM sont appelés des « objets hôtes ».

### Le DOM HTML

HTML, le langage de balisage du Web, est spécifié en termes de DOM. Comme une couche au-dessus des concepts abstraits définis dans DOM Core, HTML définit également la signification des éléments. Le DOM HTML inclut des choses telles que la propriété className sur des éléments HTML, ou des API telles que document.body.

La spécification HTML définit aussi les restrictions sur les documents ; par exemple, elle requiert que tous les enfants d'un élément <ul> (une liste non-ordonnée)     soient des éléments <li>, puisqu'ils représentent les éléments d'une liste. En général, cela interdit aussi l'utilisation d'éléments et d'attributs qui ne sont pas définis dans un certain standard.

Si vous cherchez la documentation sur l'objet Document, l'objet Window ou sur les autres éléments du DOM, vous pouvez lire la documentation relative au DOM.

### D'autres API fréquemment utilisées
- Les fonctions setTimeout et setInterval (en-US) ont d'abord été spécifiées dans l'interface Window du standard HTML.
- XMLHttpRequest : une API qui permet d'envoyer des requêtes HTTP asynchrones (voir aussi : la page MDN sur XMLHttpRequest)
- CSS Object Model : le CSSOM est utilisé pour abstraire les règles CSS sous forme d'objets. (voir aussi : la page MDN sur CSSOM)
- WebWorkers : une API qui permet d'effectuer des calculs parallèles (voir aussi : la page MDN sur cette API)
- WebSockets : une API qui permet d'effectuer des communications bi-directionnelles de bas-niveau (voir aussi : la page MDN sur cette API)
- Canvas2DContext : Une API de dessin pour l'élément <canvas>.
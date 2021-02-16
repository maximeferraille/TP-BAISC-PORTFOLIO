# M2202 - Séance 5 - Un menu avec défilement fluide de la page

Aujourd’hui nous allons continuer à manipuler la bibliothèque jQuery, cette fois pour préparer un menu avec défilement fluide de la page, quand on passe d’un menu à l’autre sur un site “one-page”, et avec mise en valeur de l’élément du menu correspondant à la section sur laquelle on se trouve.

Si vous avez oublié la syntaxe Javascript, vous pouvez utiliser le [glossaire](https://docs.google.com/spreadsheets/d/1K-3WziRzT1-uoNB5geXWYm2MuMkO2gDZIn4IhjQxWOA/edit?usp=sharing).

Pensez aussi à utiliser [l’aide-mémoire jQuery](http://igm.univ-mlv.fr/~gambette/ENSIUT/JQUERY-AideMemoire-2020.pdf).

Pour cette première séance, ce serait bien si vous pouviez atteindre la question Q9, et il faudrait idéalement que tout le monde arrive à la question Q7.

## Préparation de la page web pour insérer du code jQuery

Nous allons utiliser pour cette séance les fichiers disponibles dans le dépôt https://github.com/maximeferraille/TP-BAISC-PORTFOLIO.

Q1) Téléchargez l’archive ZIP du dépôt et décompressez-la sur votre disque dur, dans un dossier approprié (et bien rangé !), puis ouvrez le fichier index.html dans le navigateur et le dossier dans Visual Studio Code.

Remarquez que cette page web fait appel au framework Bootstrap pour la feuille de style de la page.

Q2) Modifiez le code HTML (directement dans le fichier index.html, sans utiliser Javascript) pour qu’un clic sur chaque élément du menu conduise à la section correspondante dans la page.

***Petite aide si vous bloquez vraiment, disponible sur le [fichier de consigne externe](https://docs.google.com/document/d/1Nq8o2l-IWb1BY6LcDzfu2ysDF1S1tMnHtlJNtdpFgLg/edit?usp=sharing)***

Q3) Vérifiez dans la console que le message qui doit s’afficher dès que la page a été chargée, d’après le code du fichier app.js se trouvant dans le sous-dossier assets, apparaît effectivement.

## L’affichage du menu burger

On souhaite que quand on clique sur l’icône du menu burger, qui apparaît quand on réduit la largeur de la page web, le menu apparaisse s’il est caché, et qu’il disparaisse s’il est visible.

Q4) Ajoutez un code Javascript/jQuery pour que le menu, c’est-à-dire le bloc div ayant pour identifiant navbarSupportedContent, apparaisse ou disparaisse comme expliqué ci-dessus, quand on clique sur le bouton ayant la classe navbar-toggler.

## Le défilement fluide avec jQuery

Suite à la question Q2, quand vous cliquez sur un lien du menu, la page se déplace instantanément vers ce menu. Dans cette partie, nous allons nous arranger pour que la page se déplace progressivement, par un défilement fluide vers le haut ou vers le bas.

Nous allons commencer par éviter le comportement habituel des liens du menu qui renvoient directement vers l’ancre, afin de pouvoir les remplacer par un défilement fluide vers l’ancre.

Pour cela, nous allons utiliser la fonction jQuery [preventDefault()](https://api.jquery.com/event.preventDefault/#event-preventDefault), qui va s’appliquer sur l’événement fourni en entrée de la fonction qui s’exécute quand un événement est déclenché. Par exemple, pour rendre inactifs, pour la souris, tous les liens d’une page, il faut ajouter un détecteur de clic sur ces liens, puis utiliser preventDefault

```js

() sur l’événement correspondant à ce clic :

$("a").on("click",function(e){

e.preventDefault();

})

```

Q5) Écrivez un code permettant de détecter le clic sur n’importe quel lien du menu

Q6) Dans la fonction créée par la question précédente, ajoutez une instruction qui bloque le comportement habituel de ce clic.

On va maintenant compléter cette fonction pour déplacer progressivement la page afin d’arriver à la section correspondant au menu sur lequel on a cliqué.

Pour faire ce déplacement, on va changer la valeur de la propriété CSS scrollTop de la balise HTML et, pour certains navigateurs anciens, de la balise BODY.

Q7) À l’intérieur de la fonction créée à la question Q5, écrivez un code jQuery pour changer la propriété CSS scrollTop des balises HTML et BODY, afin de déplacer la page progressivement de telle sorte que le haut de la fenêtre du navigateur arrive à 500 pixels en haut de la page, en utilisant une animation jQuery qui dure une seconde.

On va maintenant s’arranger pour que la page se cale non pas à 500 pixels de hauteur, mais au bon endroit en fonction du menu sur lequel l’internaute clique.

Pour cela, il faut préparer un sélecteur pour cibler la section correspondant au menu sur lequel l’internaute a cliqué.

Q8) Dans le code écrit à la question précédente, ajoutez en jQuery un sélecteur permettant de cibler la section sur laquelle l’internaute a cliqué.

***Petite aide si vous bloquez vraiment, disponible sur le [fichier de consigne externe](https://docs.google.com/document/d/1Nq8o2l-IWb1BY6LcDzfu2ysDF1S1tMnHtlJNtdpFgLg/edit?usp=sharing)***

On doit maintenant récupérer la position verticale de la section correspondant au menu sur lequel on a cliqué, en utilisant la fonction jQuery offset(). Cette fonction permet de récupérer la position (coordonnées horizontale et verticale en pixels) de l’élément sélectionné par rapport au coin en haut à gauche de la page. Voici par exemple comment afficher dans la console les coordonnées d’un bloc div ayant pour identifiant toto :
console.log($("#toto").offset().left + ", " + $("#toto").offset().top);

Q9) Combinez le code de la question Q7, à l’aide du sélecteur écrit à la question Q8, pour que, suite à un clic sur un élément du menu, la page se positionne correctement (verticalement, au niveau du haut de la section correspondant au menu) après un défilement fluide progressif.

## La mise en valeur d’un élément du menu

Dans les questions suivantes, on souhaite mettre en valeur l’élément du menu correspondant à la section de la page sur laquelle l’internaute se trouve.

Pour cela, vous pouvez utiliser la classe CSS active qui est habituellement utilisée dans les [menus réalisés avec Bootstrap](https://getbootstrap.com/docs/4.0/components/navs/).

Q10) Écrivez un code jQuery permettant d’ajouter la classe active au premier élément du menu (“Home”), au moment où la page se charge. On souhaite que la classe active soit ajoutée à la première balise li ayant déjà la classe nav-item.

Maintenant, on souhaite que quand on clique sur un élément du menu, cet élément ait la classe active, et qu’aucun autre élément du menu ne l’ait.

Q11) Écrivez un code jQuery permettant de retirer la classe active à tous les éléments du menu, au moment où on clique sur un élément du menu. Attention à bien ajouter la classe active soit ajoutée à la balise li ayant la classe nav-item et pas à la balise a, même si c’est la balise a qui est associée à la détection du clic.

Q12) Écrivez un code jQuery permettant d’ajouter la classe active à l’élément du menu sur lequel on a cliqué.

On souhaite maintenant ajouter cette classe uniquement au menu correspondant à la section dans la page sur laquelle l’internaute se trouve. Il y a 4 obstacles à résoudre pour réaliser cette fonctionnalité :
1. Comment détecter un déplacement de la page (pour détecter que l’internaute est en train de faire défiler la page, et donc de changer de section) ?
2. Comment savoir si le haut de la fenêtre du navigateur se trouve à l’intérieur d’un certain bloc section de la page (pour identifier la section de la page dans laquelle l’internaute se trouve) ? Pour répondre à cette question il sera utile de connaître la fonction jQuery scrollTop().
3. Comment faire le lien entre un élément du menu (qu’on veut rendre actif ou inactif) et la section de la page, c’est-à-dire le bloc section auquel il correspond ?
4. Comment lancer, pour chaque élément du menu, la vérification du fait que le haut de la fenêtre se trouve à l’intérieur du bloc section correspondant à cet élément du menu ?

Q13) Écrivez un code jQuery pour résoudre les quatre obstacles ci-dessus afin de réaliser la fonctionnalité de mise en valeur de l’élément du menu correspondant à la section de la page dans laquelle on se trouve.

Lors de la prochaine séance de TP, cette question sera davantage détaillée pour vous permettre d’avancer plus rapidement.
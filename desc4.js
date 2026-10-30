// Exercice 4 — Regroupement avec rest (10 points)
// Travail demandé :
// • 1. Écrire additionner(...nombres) qui accepte un nombre 
// variable d’arguments et retourne leur somme.
// Tester avec 2, 3 puis 5 valeurs.
// • 2. Écrire afficherPremierEtAutres(premier, ...autres) 
// qui affiche le premier argument séparément
// puis le tableau des autres arguments.
// • 3. Écrire creerFiche(nom, filiere, ...competences) 
// qui retourne un objet contenant le nom, la filière
// et un tableau de compétences.
// • 4. Expliquer pourquoi le paramètre rest doit être 
// placé à la fin de la liste des paramètres


function additionner(...nombres){
    let somme=0
    for(let i=0;i<nombres.length;i++){
        somme+=nombres[i]
    }
    return somme
}

console.log(additionner(12,17))
console.log(additionner(14,22,33))
console.log(additionner(16,44,55))


function afficherPremierEtAutres(premier,...autres){

console.log(`le premier argument:${premier}`)
console.log(`les autres arguments:${autres}`)
    
}

afficherPremierEtAutres(24,25,26,89,90,100)

// • 3. Écrire creerFiche(nom, filiere, ...competences) 
// qui retourne un objet contenant le nom, la filière
// et un tableau de compétences.

function creerFiche(nom,filiere,...competences){
    return{
        nom:nom,
        filiere:filiere,
        competences:competences
    }

}

console.log(creerFiche("Diop","Genie logiciel","HTML,CSS,JAVASCRIPT,PYTHON"))


// • 4. Expliquer pourquoi le paramètre rest doit être 
// placé à la fin de la liste des paramètres

/*Par ce que javascript doit savoir quelle valeure attribuer
au fonction claasique avant de regrouper les autres valeures dans le tableau REST*/
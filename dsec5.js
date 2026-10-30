// Travail demandé :
// • 1. Écrire extraireIdentite(etudiant) qui utilise le destructuring et retourne 
// un objet contenant uniquement le prénom, le nom et la filière.
// • 2. Écrire calculerMoyenneNotes(notes) qui calcule la moyenne d’un tableau. 
// Si le tableau est vide, retourner 0.
// • 3. Écrire ajouterNote(etudiant, nouvelleNote) qui retourne un nouvel objet avec la nouvelle note
// ajoutée. Utiliser spread pour ne pas modifier l’objet et le tableau d’origine.
// • 4. Écrire creerResume(etudiant, ...options) qui retourne un résumé contenant l’identité, la moyenne
// et les options reçues dans un tableau.
// • 5. Tester les fonctions et vérifier explicitement que les données initiales ne sont pas modifiées.
// Critère de qualité : privilégiez des fonctions courtes, 
// des noms explicites et des tests couvrant aussi les cas
// limites.




const etudiantL2 = {
 id: 104,
 prenom: "Aminata",
 nom: "Fall",
 notes: [13, 16, 12],
 filiere: "IAGE"
};

function extraireIdentite(etudiant){
    const {nom,prenom,filiere}=etudiant
    return {nom,prenom,filiere}
} 

console.log(extraireIdentite(etudiantL2))

// • 2. Écrire calculerMoyenneNotes(notes) qui calcule la moyenne d’un tableau. 
// Si le tableau est vide, retourner 0.

function calculerMoyenneNotes(note){
    const{notes}=note
    if (notes.length===0){
        return 0
    }
    let som=0
    for(let i=0;i<notes.length;i++){
        som+=notes[i]
    }
    const moyenne=som/notes.length
    return moyenne
}

console.log(calculerMoyenneNotes(etudiantL2))


// • 3. Écrire ajouterNote(etudiant, nouvelleNote) qui retourne un nouvel objet
//  avec la nouvelle notenajoutée. 
// Utiliser spread pour ne pas modifier l’objet et le tableau d’origine.

function ajouterNote(etudiant,nouvelleNote){
    //ancienne note
    const ancienneNote=[...etudiant.notes]
    const nouvelle=[...ancienneNote,nouvelleNote]
    const nouveauEtudiant={...etudiant,notes:nouvelle}
    return nouveauEtudiant
}

const afficherNote=ajouterNote(etudiantL2,99)
console.log(afficherNote)
console.log(etudiantL2)

// • 4. Écrire creerResume(etudiant, ...options) qui retourne
//  un résumé contenant l’identité, la moyenne
// et les options reçues dans un tableau.

function creerResume (etudiant, ...options){
    const {nom,prenom,filiere}=etudiant
    const moyenne=calculerMoyenneNotes(etudiant)
    return{
        nom,prenom,filiere,
        moyenne,options
    }
}

const divulguer=creerResume(etudiantL2,"licence","master","doctorat")
console.log(divulguer)
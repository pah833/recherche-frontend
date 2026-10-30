// 1. Avec le destructuring d’objet, extraire nom, prenom et filiere.
//  • 2. Extraire niveau dans une variable appelée classe (renommage).
//  • 3. Avec le destructuring de tableau, récupérer la première, 
// la deuxième et la dernière note sans modifier le tableau d’origine.
//  • 4. Extraire la première et la troisième note 
//   en laissant volontairement une position ignorée.
//  • 5. Utiliser une valeur par défaut pour extraire la propriété email,
//  absente de l’objet. 
// • 6. Afficher une phrase de présentation contenant le prénom, 
// le nom, la filière et la classe.

let etudiant={
    nom:"DIOP",
    prenom:"PAPA",
    filiere:"Genie logiciel"
}

const {nom,prenom,filiere,niveau:classe="L2",email="papamamadiop33@gmail.com"}=etudiant
console.log(nom," ",prenom," ",filiere," ", classe," ",email)
console.log(`je m'appelle ${nom} ${prenom} je suis en ${classe} ${filiere}`)

const note =[12,17,15,10,8,6,20,5] 
const[note1,,note3,,,,note7]=note
console.log(note1,note3,note7)

const[notepremier,,notetrois,,,,]=note
console.log(notepremier,notetrois)


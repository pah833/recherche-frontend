// Dégroupement avec spread (10 points)

// • 1. Créer tousLesEtudiants en rassemblant les deux groupes 
// sans écrire chaque nom manuellement.
// • 2. Créer une copie de groupeA, puis ajouter "Cheikh" dans la copie. 
// Vérifier que le tableau original n’a pas changé.
// • 3. Créer etudiantComplet à partir de etudiantBase, 
// en ajoutant age: 22 et ville: "Dakar".
// • 4. Créer une copie de etudiantBase en remplaçant uniquement
//  le niveau par "L3". Vérifier que l’objet
// original conserve "L2".
// • 5. Fusionner les objets coordonnees et contact dans un objet profil.
//  Si une propriété existe dans les
// deux objets, observer la valeur conservée.

const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };

const tousLesEtudiants=[...groupeA,...groupeB]
console.log(tousLesEtudiants)

const copie =[...groupeA,"Cheikh"]
console.log(copie)

console.log(groupeA)

const etudiantComplet={...etudiantBase,age:22,ville:"Dakar"}
console.log(etudiantComplet)

const copiEtudiantbase={...etudiantBase,niveau:"L3"}
console.log(copiEtudiantbase)

console.log(etudiantBase)

const coordonnees = {
    ville: "Dakar",
    pays: "Sénégal",
    telephone: "77-344-09-89"
}

const contact = {
    telephone: "77-344-09-89",
    email: "papa@gmail.com"
}

const profil={...coordonnees,...contact}
console.log(profil)
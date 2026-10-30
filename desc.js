function factoriel(x){
   let fact=1
    for(let i=1;i<=x;i++){
        fact=fact*i
    }
return fact
}
// console.log(factoriel(4))

const factoriele = (val)=>{
    let f=1
    for(let i=1;i<=val;i++){
        f=f*i
    }
return f
}

// console.log(factoriele(4))

let produit ={
    id:1,
    libelle:"tomate",
    prixU:500,
    Qte:10

}

const {libelle,Qte:Quantite}=produit;
// console.log(`le libelle est: ${libelle} et la quantite: ${Quantite}`);


const tab=[100,2,10];
const [,deux,]=tab
// console.log(deux);

const et1={id:1,nom:"DIOP"}
const et2={id:1,nom:"DIOP",age:15}

const etUnion={...et1,...et2};
console.log(etUnion);
console.log(et1,et2)


const users={
    matricule:1,
    nom:"DIOP",
    passWord:"passer123",
    age:17,
    email:"papamamadiop33@gmail.com"

}

const {passWord,...newUsers}=users
console.log(newUsers)


// const calculerMoyenne=(note1, note2, note3) =>{
//      return moyenne=(note1+note2+note3)/3
     
// }
// console.log(calculerMoyenne(12,15,17))


const note=[12,15,17]

let som=0
const calculerMoyenne=note.reduce((total,notes)=>{
    return som =total+notes
},0)
let moyenne=0

moyenne=som/3
console.log(moyenne);

const resultat= moyenne >= 10? "true":"false"
console.log(resultat)


// • 2. Écrire estAdmis(moyenne) qui retourne true si 
// la moyenne est supérieure ou égale à 10, sinon false.


function estAdmis(moyenne){

    return moyenne >= 10? "true":"false"
}
console.log(estAdmis(13))


// • 3. Écrire calculerPrixTTC(prixHT, tauxTVA = 0.18)
//  qui retourne le prix TTC. Le taux par défaut est de


function calculerPrixTTC(prixHT,tauxTVA=0.18){
    let montant_tva=prixHT*tauxTVA
    prixTTC=prixHT+montant_tva
    return prixTTC
   
}

console.log(calculerPrixTTC(20000))

//  Écrire une fonction fléchée convertirEnMinutes(heures) 
// qui retourne le nombre de minutes correspondant.


const convertirEnMinutes=(Heure)=>{
    return Heure*60
}
console.log(convertirEnMinutes(12))
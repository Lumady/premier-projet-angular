export class User {
    name: string;
    firstname: string;
    age: number;
    quote: string;
// les propriétées ci dessus doivent etre initialisé via un constructeur
 constructor(  // fonction qui prends les paramètre : 
    nameParam: string,
    firsnameParam: string,
    ageParam: number,
    quoteParam: string,
 ){  // initialisation des variable ici
    this.name= nameParam;
    this.firstname= firsnameParam;
    this.age= ageParam;
    this.quote= quoteParam;
 }

}

// le modèle user complet


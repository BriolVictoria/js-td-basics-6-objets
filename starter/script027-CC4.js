/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).
const bmiMark = poidsMark / (tailleMark * tailleMark);
const bmiJohn = poidsJohn / (tailleJohn * tailleJohn);

BONNE CHANCE 😀
*/

const bmiMark = {
    nom: 'Mark',
    taille: 1.80,
    poids: 80,
    bmi (){
        return this.poids / (this.taille)*2
    },
};

console.log(bmiMark.bmi());

const bmiJohn = {
    nom: 'John',
    taille: 1.95,
    poids: 75,
    bmi (){
        return this.poids / (this.taille)*2
    },
}

console.log(bmiJohn.bmi());


if (bmiJohn < bmiMark) {
    console.log(`Mark a un BMI plus élevé que John`)
} else {
    console.log(`John a un BMI plus élevé que Mark`)
}
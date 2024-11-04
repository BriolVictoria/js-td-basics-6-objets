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
const poidsMark = 50;
const poidsJohn = 103;

const tailleMark = 1.75;
const tailleJohn = 1.80; */

const bmiMark ={
    nom: 'Mark',
    poids:50,
    taille:1.75,
    bmi() {
        return this.poids / (this.taille)*2
    },
};

const bmiJohn ={
    nom: 'John',
    poids:103,
    taille:1.80,
    bmi() {
        return this.poids / (this.taille)*2
    },
};

console.log(bmiMark.bmi())
console.log(bmiJohn.bmi())

if (bmiMark < bmiJohn) {
    console.log('John a le bmi le plus élevé')
} else {
    console.log('Mark a le bmi le plus élevé')
}




/*
OBJETS - PRÉPA 1 : Création d'un personnage
Aurora est représentée par un objet aurora ayant quatre propriétés : nom, sante, force et xp (expérience).
Elles ont chacune une valeur et, ensemble, définissent l'état de notre personnage à un instant donné.
Aurora s'apprête à vivre une longue série d'aventures, dont certaines pourront modifier ses caractéristiques.
1. Crée un objet nommé aurora contenant les propriétés nom, sante, force et xp
   avec les valeurs "Aurora", 150, 25 et 0
2. Ajoute à cet objet une méthode decrire()
   qui retourne "… a … points de vie, … en force et … points d'expérience"
   en complétant les … par les valeurs d'aurora
3. Utilise cette méthode pour afficher la description d'aurora
4. Affiche dans la console "Aurora apprend une nouvelle compétence"
5. Ajoute 15 points d'expérience à aurora
6. Réaffiche la description d'aurora
7. Affiche dans la console "Aurora est blessée par une flèche"
8. Retire 20 points de santé à aurora
9. Affiche "Aurora trouve un bracelet de force"
10. Ajoute 10 points de force à Aurora
11. Réaffiche la description d'aurora
*/
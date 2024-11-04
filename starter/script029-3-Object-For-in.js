/*****************************
 * 029-2 - Boucles pour parcourir des objets
 */

// 2. Boucle for/in pour parcourir des objets

/*
for(const prop in objet) {
  console.log(prop + " : " + objet[prop]);
}   
*/

/*
EXERCICE 1 : 
Parcours l'objet mesFruits pour afficher, pour chacun des fruits, "Le fruit … coûte … €"
*/
const mesFruits = {
  "Pomme": 1.3,
  "Poire": 0.5,
  "Ananas": 3
};

// Écris ton code ici

for (const mesFruitsKey in mesFruits) {
  console.log("Pomme" + " coûte " + mesFruits ["Pomme"]+ " euro");
}

for (const mesFruitsKey in mesFruits) {
  console.log("Ananas" + " coûte " + mesFruits ["Ananas"]+ " euro");
}

for (const mesFruitsKey in mesFruits) {
  console.log("Poire" + " coûte " + mesFruits ["Poire"]+ " euro");
}

/*
EXERCICE 2 :
Parcours l'objet fruit pour afficher chacune de ses propriétés avec, pour chacune, sa valeur
*/
const fruit = {
  "Nom": "Pomme",
  "Prix": 0.3,
  "Couleur": "Verte",
  "Variété": "Golden"
};

// Écris ton code ici

for (const fruitKey in fruit) {
  console.log("Nom" + " est " + fruit ["Nom"]);
}

for (const fruitKey in fruit) {
  console.log("Prix" + " est " + fruit ["Prix"]);

}

for (const fruitKey in fruit) {
  console.log("Couleur" + " est " + fruit ["Couleur"]);

}

for (const fruitKey in fruit) {

  console.log("Variété" + " est " + fruit ["Variété"]);
}


// Un mot est un objet de type String => ceci fonctionne également…
/*
EXERCICE 3 :
Parcours le mot "Bonjour" pour afficher séparément chacune de ses lettres
*/
const mot = "Bonjour";

// Écris ton code ici

const bonjour= {
  b:'b',
  o:'o',
  n:'n',
  j:'j',
  u:'u',
  r:'r',
}

for (const bonjourKey in bonjour) {
  console.log(bonjour["b"]);
}

for (const bonjourKey in bonjour) {
  console.log(bonjour["o"]);
}

for (const bonjourKey in bonjour) {
  console.log(bonjour["n"]);
}

for (const bonjourKey in bonjour) {
  console.log(bonjour["j"]);
}

for (const bonjourKey in bonjour) {
  console.log(bonjour["o"]);
}

for (const bonjourKey in bonjour) {
  console.log(bonjour["u"]);
}

for (const bonjourKey in bonjour) {
  console.log(bonjour["r"]);
}
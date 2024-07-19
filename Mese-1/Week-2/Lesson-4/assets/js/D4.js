/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 1-----------");
let l1 = 21;
let l2 = 4;

function area(l1, l2) {
  let area = l1 * l2;
  return area;
}
areaRettangolo = area(l1, l2);

console.log("L/area del rettangolo è: " + areaRettangolo);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 2-----------");

function crazySum(l1, l2) {
  if (l1 === l2) {
    return (l1 + l2) * 3;
  } else {
    return l1 + l2;
  }
}
console.log(crazySum(l1, l2));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 3-----------");
let number = 19;
function crazyDiff(l1, number) {
  let value = l1 - number;
  let effValue = Math.abs(value);
  if (l1 > number) {
    return effValue * 3;
  } else {
    return effValue;
  }
}
console.log(crazyDiff(l1, number));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 4-----------");

let n = 150;
function boundary(n) {
  if (20 < n <= 100 && n === 400) {
    return (true);
 } else {
    return(false);
 }
}

console.log(boundary(n));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 5-----------");

let stringa = 'Benvenuti a '

function epify (stringa) {
    let newString = stringa.concat('Epicode');
    if (stringa.includes('Epicode')){
        return (stringa);
    }else {
        return (newString);
    }
}
console.log(epify(stringa));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 6-----------");

function check3and7(l1) {
    if(l1 % 3 === 0 && l1 % 7 === 0 ){
        return (true);
    }else {
        return (false);
    }
}
console.log(check3and7(l1));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 7-----------");
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 8-----------");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 9-----------");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------Esercizio 10-----------");

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 5
let number2 = 14
if (number1 < number2) {
  console.log('Il secondo fattore è maggiore');
  document.getElementById('1answer').innerText = 'Il primo fattore è minore'
} else if (number1 > number2) {
  console.log('Il primo fattore è maggiore');
  document.getElementById('1answer').innerText = 'Il primo fattore è minore'
} else {
  console.log('I fattori sono uguali');
  document.getElementById('1answer').innerText = 'I fattori sono uguali'
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (number2 !== number1) {
  console.log('Il fattore non è 5');
  document.getElementById('2answer').innerText = 'Il fattore non è 5'
} else {
  console.log('Il fattore è 5');
  document.getElementById('2answer').innerText = 'Il fattore è 5'
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (number1 % 5 === 0) {
  console.log('Il fattore è divisibile per 5');
} else {
  console.log('Il fattore non è divisibile per 5');
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number3 = 6
if (number2 === 8 || number3 === 8 || number2 - number3 === 8 || number3 - number2 === 8 || number2 + number3 === 8) {
  console.log('La risposta è 8');
} else {
  console.log('La risposta non è 8');
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 48
let spediziione = 10
let checkout;

if (totalShoppingCart > 50) {
  checkout = totalShoppingCart;
} else {
  checkout = totalShoppingCart + spediziione;
}
console.log(checkout)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sale = 0.2;
totalShoppingCart = totalShoppingCart * (1 - sale);

if (totalShoppingCart > 50) {
  checkout = totalShoppingCart;
} else {
  checkout = totalShoppingCart + spediziione;
}
console.log(checkout)
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 20
let num2 = 10
let num3 = 30

if (num1 > num2) {
  if (num3 > num1) {
    console.log(num3, num1, num2)
  } else {
    if (num3 > num2) {
      console.log(num1, num3, num2)
    } else {
      console.log(num1, num2, num3)
    }
  }
} else {
  if (num3 > num2) {
    console.log(num3, num2, num1)
  } else {
    if (num3 > num1) {
      console.log(num2, num3, num1)
    } else {
      console.log(num2, num1, num3)
    }
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let integer = 15;
if (typeof (integer) === 'number') {
  console.log('E un numero')
} else {
  console.log('Non è un numero')
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (integer % 2 === 0) {
  console.log('Il numero è pari')
} else {
  console.log('Il numero è dispari')
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 21
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.length = me.skills.length -1;
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myArray = [];

myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;
myArray[3] = 4;
myArray[4] = 5;
myArray[5] = 6;
myArray[6] = 7;
myArray[7] = 8;
myArray[8] = 9;
myArray[9] = 10;

console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myArray[9] = 100;
console.log(myArray);

/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
console.log("-----Esercizio 1-----");
let title =  document.querySelector("h1");
const changeTitle = function () {
title.innerText  = "Nuovo Titolo";
 }
changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
console.log("-----Esercizio 2-----");
const addClassToTitle = function () {
 title.classList.add('myHeading');
};
addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
console.log("-----Esercizio 3-----");
const changePcontent = function () {
    let newParagrafo = document.querySelectorAll('div p');
    newParagrafo.forEach((element, index) => {
        element.innerText = 'Paragrafo modificato';
    });
  };
  changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
console.log("-----Esercizio 4-----");
const changeUrls =function () {
  let newLink = document.querySelectorAll('a:not(footer a)');
  newLink.forEach(element => {
    element.setAttribute('href', 'https://www.google.com');
  });
};
changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
console.log("-----Esercizio 5-----");
const addToTheSecond = function () {
  let ulElement = document.getElementById("secondList");
  let liElement = document.createElement("li");
  liElement.innerText = '4th';
  ulElement.appendChild(liElement);
};
addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
console.log("-----Esercizio 6-----");
const addParagraph = function () {
    let divH1 = document.querySelector('div');
    let newParagrafo = document.createElement('p');
    newParagrafo.innerText = 'Sono il nuovo vicino';
    divH1.appendChild(newParagrafo);
};
addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
console.log("-----Esercizio 7-----");
const hideFirstUl = function () {
    let list1 = document.getElementById('firstList');
    list1.remove();
};
//hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
console.log("-----Esercizio 8-----");
const paintItGreen = function () {
    let listsBackColor = document.querySelectorAll('ul');
    listsBackColor.forEach(list => {
       list.classList.add('backGreen');
    });
};
paintItGreen();
/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
console.log("-----Esercizio 9-----");
const makeItClickable = function () {
    title.addEventListener('click', function() {
        title.innerText = title.innerText.slice(0, -1);
    });
};
makeItClickable();
/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
console.log("-----Esercizio 10-----");
const revealFooterLink = function () {
    let footerAlert = document.querySelector('footer');
    footerAlert.classList.add('pointer');
    footerAlert.onclick = () => {
        let linkAlert = document.querySelector('footer a').getAttribute('href');
        alert(linkAlert);
    };
};
revealFooterLink()
/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
console.log("-----Esercizio 11-----");
const generateTable = function () {};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
console.log("-----Esercizio 12-----");
const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
console.log("-----Esercizio 14-----");
const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
console.log("-----Esercizio 15-----");
const changeColorWithRandom = function () {};

/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log(" <-----Esrcizio 1----->");

function result(stringa1, stringa2) {
  let parte1 = stringa1.slice(0, 2);
  let parte2 = stringa2.slice(-3);
  return (parte1 + parte2).toUpperCase();
}

let stringa1 = "Hello";
let stringa2 = "World";

let risultato = result(stringa1, stringa2);
console.log(risultato);
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log(" <-----Esrcizio 2----->");
function arrayCasuale() {
  let arrayNum = [];
  for (let index = 0; index < 10; index++) {
    let numeroCasuale = Math.floor(Math.random()* 101);
    arrayNum.push(numeroCasuale);
  }
  return arrayNum;
}

arrayNumCasuali = arrayCasuale();
console.log(arrayNumCasuali);
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log(" <-----Esrcizio 3----->");
function filterEven(array) {
  let arreyPari = array.filter(item => {
    return item % 2 === 0;
  }
)
return arreyPari;
  };

let arrayNumeri = [97, 20, 100, 69, 12, 36, 76, 19, 52, 64];
let arrayEvenNumerber = filterEven(arrayNumeri);
console.log(arrayEvenNumerber);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log(" <-----Esrcizio 4----->");
function arraySomma (numeri) {
let somma = 0;
numeri.forEach(function (item){
  somma += item;
});
return somma;
}
let numeri = [5, 8, 3, 4, 12, 16, 24];
let sommare = arraySomma(numeri);
console.log('La somma è: '+ sommare);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log(" <-----Esrcizio 5----->");
function arraySomma2 (numeri){
  return numeri.reduce((somma, item)=> somma+item)
};

let numeri2 =[30, 4, 54, 56];
let somma2 = arraySomma2(numeri2);
console.log('La somma è: '+somma2);
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log(" <-----Esrcizio 6----->");
let numeri3 = [12, 19, 65];
let numberUp = numeri3.map(item =>{
  return item + 5;
});
console.log(numeri3);
console.log(numberUp);
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log(" <-----Esrcizio 7----->");
function stringaLengths(array) {
  newArray= array.map(stringa => stringa.length);
  return newArray;
}

let arrayStringhe = ['Che', 'figata', 'Js'];
let numCaratteri = stringaLengths(arrayStringhe);
console.log(numCaratteri);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log(" <-----Esrcizio 8----->");
function numeriDispari(){
  let risultato=[];
  for (let index = 1; index < 100; index ++) {
    if (index % 2 !== 0);{
      risultato.push(index);
    }
   }
   console.log(risultato);
}
numeriDispari()

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log(" <-----Esrcizio 9----->");
const oldest = () => {
  let oldYear = parseInt(movies[0].Year);
  let oldMovie = movies[0];
  movies.forEach(item =>{
    if (parseInt(item.Year) < oldYear) {
      oldYear = parseInt(item.Year);
      oldMovie = item;
    }
  });
  console.log(oldMovie);
};
oldest();

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log(" <-----Esrcizio 10----->");
const numMovies= () => {
  console.log(movies.length);
};

numMovies();
 
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log(" <-----Esrcizio 11----->");
const titoli = () =>{
  const arrayTitoli = movies.map( item => {
    return item.Title
  });
  console.log(arrayTitoli);
};

titoli();
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log(" <-----Esrcizio 12----->");
const anni2000 = () => {
  const arrayXXI = movies.filter(item => {
    return parseInt(item.Year) > 2000;
  });
  console.log(arrayXXI);
};
anni2000();
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log(" <-----Esrcizio 13----->");
const sommaAnni = movies.reduce((total, item)=> total + parseInt(item.Year), 0);
console.log(sommaAnni);
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log(" <-----Esrcizio 14----->");
const trovaFilm = movieId => {
  const film = movies.find(item => item.imdbID === movieId);
  console.log(film);
}
trovaFilm("tt0848228");
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log(" <-----Esrcizio 15----->");
const trovaFilmXAnno = year => {
  const film = movies.findIndex(item => item.Year == year);
console.log(film);
};
trovaFilmXAnno (2005);
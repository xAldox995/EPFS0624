const booksObjs = function(){
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
        console.log('response', response);
        if (response.ok) {
            console.log('VA TUTTO BENE');
            return response.json();
        } else {
            throw new Error('La risposta del server non era corretta');
        }
    } )
    .then((data) => {
        console.log('FINITO!', data);
        generateCards(usersList)
        .then((booksList) => {
            console.log('LIBRI', booksList);
        })
    })
    .catch((error) => {
        console.log('error',error);
    } )
}

booksObjs()
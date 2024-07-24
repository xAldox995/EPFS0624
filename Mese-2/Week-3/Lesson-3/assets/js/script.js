const booksObjs = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        console.log("VA TUTTO BENE");
        return response.json();
      } else {
        throw new Error("La risposta del server non era corretta");
      }
    })
    .then((data) => {
      console.log("FINITO!", data);
      generateCards(usersList).then((booksList) => {
        console.log("LIBRI", booksList);
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

booksObjs();

const generateCards = function (booksArray) {
  const cardGroup = document.getElementById("row");
  booksArray.array.forEach((book) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col-6, col-md-3, col-lg-2");
    cardGroup.appendChild(newCol);
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCol.appendChild(newCard);
    const imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = book.img;
    newCard.appendChild(imgCard);
    const bodyCard = document.createElement("div");
    bodyCard.classList.add("card-body");
    newCard.appendChild(bodyCard);
    const titleCard = document.createElement("h5");
    titleCard.classList.add("card-list");
    bodyCard.appendChild(titleCard);
    const pCard = document.createElement("p");
    pCard.classList.add("card-text");
    bodyCard.appendChild(pCard);
    const removeCard = document.createElement('i');
    removeCard.classList.add('bi bi-trash3');
    bodyCard.appendChild(removeCard)
  });
};

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
    /*.then((data) => {
      console.log("FINITO!", data);
      generateCards(usersList).then((booksList) => {
        console.log("LIBRI", booksList);
      });
    })*/
    .then((data) => {
      console.log("RECUPERO GLI OGGETTI", data);
      generateCards(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const generateCards = function (booksArray) {
    const cardGroup = document.getElementById("row");
    booksArray.forEach((book) => {
      const newCol = document.createElement("div");
      newCol.classList.add("col-6","col-md-3","col-lg3");
      const newCard = document.createElement("div");
      newCard.classList.add("card");
      newCol.appendChild(newCard);
      const imgCard = document.createElement("img");
      imgCard.classList.add("card-img-top");
      imgCard.src = book.img;
      newCard.appendChild(imgCard);
      const bodyCard = document.createElement("div");
      bodyCard.classList.add("card-body","bg-dark","text-light");
      newCard.appendChild(bodyCard);
      const titleCard = document.createElement("h5");
      titleCard.classList.add("card-list");
      titleCard.innerText = book.title;
      bodyCard.appendChild(titleCard);
      const pCard = document.createElement("p");
      pCard.classList.add("card-text");
      pCard.innerText =`${book.price} $` ;
      bodyCard.appendChild(pCard);
      const removeBtn = document.createElement("a");
      removeBtn.classList.add("btn","btn-outline-danger");
      bodyCard.appendChild(removeBtn);
      const removeImg = document.createElement('i')
      removeImg.classList.add("bi","bi-trash3");
      removeBtn.appendChild(removeImg);
      cardGroup.appendChild(newCol);
    });
  };
  

booksObjs();


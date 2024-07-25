const getImages = function (query) {
  fetch("https://api.pexels.com/v1/search?query=" + query, {
    headers: {
      Authorization: "hYEaBjSs4pF6PvZAQDn20vd8RRox2g1UV9vVi12uNloPydZQMVh4SE8r",
    },
  })
    .then((response) => {
      console.log("Ecco la response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Attenzione al response");
      }
    })
    .then((data) => {
      console.log("Ecco i dati", data.photos);
      const allTheDogImgs = document.querySelectorAll(".card img");
      allTheDogImgs.forEach((dog, i) => {
        dog.src = data.photos[i].src.medium;
      });
    })

    .catch((error) => {
      console.log("Attenzione", error);
    });
};

document.querySelector(".btn-outline-success").addEventListener("click", () => {
  const currentSearchValue = document.getElementById("search").value;
  getImages(currentSearchValue);
});
// getImages('crypto');
// const replaceOfEdits = function () {
//   const allTheEdits = document.querySelectorAll('.card .btn-group button:last-of-type');
//   allTheEdits,array.forEach(element => {
//     element.innerText = 'Hide'
//     element.addEventListener('click', function (e) {
//       this.closest('.card').classList.add('invisible')
//     })
//   });
// }
// replaceOfEdits()
const replaceAllEdits = function () {
  const allTheEdits = document.querySelectorAll(
    ".card .btn-group button:last-of-type"
  );
  console.log(allTheEdits);
  allTheEdits.forEach((edit) => {
    edit.innerText = "Hide";
    edit.addEventListener("click", function (e) {
      console.log("hide");
      e.target.closest(".card").classList.add("invisible");
    });
  });
};

replaceAllEdits();

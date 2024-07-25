const getImage = function (query) {
  fetch("https://api.pexels.com/v1/search?query=" + query, {
    headers: {
      Authorizzation:
        "hYEaBjSs4pF6PvZAQDn20vd8RRox2g1UV9vVi12uNloPydZQMVh4SE8r"
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
      console.log("Ecco i dati", data);
    })

    .catch((error) => {
      console.log("Attenzione", error);
    });
};

getImage();

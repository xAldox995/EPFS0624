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
      console.log("Ecco i dati", data);
      data.array.forEach((element) => {
        const newCol = `            
        <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src=${element.url}
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>`;
            const rowCards = document.getElementById('rowCards')
            rowCards.innerHTML += newCol
      });
    })

    .catch((error) => {
      console.log("Attenzione", error);
    });
};

getImages(crypto);

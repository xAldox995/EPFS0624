console.log("Esercizio USER");
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  comparation = function (obj) {
    if (this.age > obj.age) {
      return obj.firstName + " è più giovane di " + this.firstName;
    } else if (this.age < obj.age) {
      return obj.firstName + " è più vecchio di " + this.firstName;
    } else {
      return obj.firstName + " è vecchio come " + this.firstName;
    }
  };
}

const user1 = new User("Mario", "Rossi", 20, "Milano");
const user2 = new User("Davide", "Bianchi", 25, "Napoli");
const user3 = new User("Aldo", "Verdi", 30, "Bari");
const user4 = new User("Giovanni", "Scem", 20, "Palermo");
const user5 = new User("Dante", "Ferro", 25, "Firenze");
const user6 = new User("Virgilio", "Impero", 30, "Roma");

console.log(user1.comparation(user6));

console.log("Esercizio PET");

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner = function (obj) {
    if (this.ownerName === obj.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

const petList = [];

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const petNameValue = document.getElementById("petName").value;
    const ownerNameValue = document.getElementById("ownerName").value;
    const speciesValue = document.getElementById("species").value;
    const breedValue = document.getElementById("breed").value;

    const element = new Pet(
      petNameValue,
      ownerNameValue,
      speciesValue,
      breedValue
    );

    for (let pet of petList) {
      if (element.sameOwner(pet)) {
        alert(
          "Attenzione: " +
            element.ownerName +
            " è già il proprietario di un altro animale."
        );
        break;
      }
    }

    petList.push(element);

    const unorderedList = document.getElementById("petList");

    unorderedList.innerHTML = "";

    for (let i = 0; i < petList.length; i++) {
      // quest'operazione verrà ripetuta per OGNI elemento della memoria
      // creo un <li> vuoto
      const newLi = document.createElement("li"); // <li>  </li>
      // ora lo riempio con i dati dell'elemento singolo della memoria

      newLi.innerText =
        "Pet Name: " +
        petList[i].petName +
        " | Owner Name:  " +
        petList[i].ownerName +
        " | Species: " +
        petList[i].species +
        " | Breed: " +
        petList[i].breed;
      // Stefano Casasola | 123123
      // <li>Stefano Casasola | 123123</li>
      newLi.classList.add("list-group-item");
      // <li class="list-group-item">Stefano Casasola | 123123</li>
      // ora, passo finale, appendo l'<li> appena creato e finito
      // nella lista non ordinata
      unorderedList.appendChild(newLi);
    }

    // resetto il form
    // firstNameInput.value = ''
    // lastNameInput.value = ''
    // phoneInput.value = ''
    document.getElementsByTagName("form")[0].reset();
  });

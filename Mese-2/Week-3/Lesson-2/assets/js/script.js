class User {
  constructor(_userName) {
    this.userName = _userName;
  }
}

const genArray = function (array) {
  const list = document.getElementById("usersList");
  list.innerHTML = "";
  for (let i = 0; i < array.lenght; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = array[i].userName;
    newLi.classList.add("list-group-item");
    list.appendChild(newLi);
  }
};

const userList = localStorage.getItem("listaUser")
  ? JSON.parse(localStorage.getItem("listaUser"))
  : [];

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nameUser = document.getElementById("inputUser").value;
    const element = new User(nameUser);
    userList.push(element);
    localStorage.setItem("listaUser", JSON.stringify(userList));
    genArray(userList);
    document.getElementsByTagName("form")[0].reset();
  });

  const saveUsersList = localStorage.getItem('listaUser');
  if (saveUsersList) {
    const arrayOfUsers = JSON.parse(saveUsersList);
    console.log(arrayOfUsers);
    genArray(arrayOfUsers);
  }


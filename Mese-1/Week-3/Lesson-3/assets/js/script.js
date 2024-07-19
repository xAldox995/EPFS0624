const toDoList = document.getElementById('toDoList');
const newTask = document.getElementById('newTask');
const insNewTaskBtn = document.getElementById('insNewTaskBtn');
const clearBtn = document.getElementById('clearBtn');
const toDo = document.getElementById('toDo');
const letStart = document.getElementById('letStart');
const listElement =[];


insNewTaskBtn.addEventListener('click', function (e) {
    let myConfirm = confirm('Sei sicuro?')
    if (!myConfirm) return;
    e.preventDefault();
    if (!checkInput()) return;
	popolateArray();
	printList();
	toDoList.reset();
});

function checkInput() {
    if (newTask === '') {
        return false;
    } else {
        return true;
    }
}

function popolateArray () {
listElement.push(listElement.value);
console.log(listElement);
}

function printList() {
	toDo.innerHTML = '';
	for (let i = 0; i < listElement.length; i++) {
		let newP = document.createElement('p');
		newP.innerText = listElement[i];
		let btnDelete = document.createElement('button');
		btnDelete.setAttribute('type', 'button');
		btnDelete.setAttribute('onclick', `deleteItem(${i});`);
		btnDelete.innerText = '❌';
		newP.appendChild(btnDelete);
		toDo.appendChild(newP);
    }
}

function deleteItem(index) {
	listElement.splice(index, 1); 
	printList();
}
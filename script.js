let formTask = document.querySelector(".form-task")
let button = document.querySelector(".button")
let taskList = document.querySelector(".task-list")

function addNewTask(event){
    event.preventDefault();

    let newItem = document.querySelector('#template').cloneNode(true).content; //копирует узел из темплейта(шаблона)
    let information = formTask.value; // получение данных от пользавателя
    newItem.querySelector(".task__text").value = information; // записывает информацию 
    let buttonDelite = newItem.querySelector(".task__delete")
    buttonDelite.addEventListener('click', deliteTask);
    taskList.append(newItem); // добавляем новый элемент в список
    formTask.value = ''; // сбрасывается значение 
    formTask.focus(); // возрящает в строчку ввода информации 
}

function deliteTask(event){
    let target = event.target.parentElement
    target.remove()
}



button.addEventListener('click', addNewTask); //слушает нажатие по кнопке 



//Selectors
const todoBtn = document.querySelector(".todo-btn");
const todoInp = document.querySelector(".todo-Inp");
const todoList = document.querySelector(".todo_list");

//Event Listeners
todoBtn.addEventListener("click", addTask);
todoList.addEventListener("click", chakOrDellet);

//Functions
function addTask(e) {
    e.preventDefault();

    //creat li
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo");

    //creat div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("task_name");

    //add input value to div
    todoDiv.innerText = todoInp.value;

    //creat button complete
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("todo_chech");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    //create button trash
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("todo_trash");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    //add div + button 1 + button 2 -> li
    todoLi.appendChild(todoDiv);
    todoLi.appendChild(completeBtn);
    todoLi.appendChild(trashBtn);

    //add li to ul
    todoList.appendChild(todoLi);

    //remove input value
    todoInp.value = "";
}

function chakOrDellet(e) {
    const item = e.target;

    if (item.classList[0] === "todo_chech") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }

    if (item.classList[0] === "todo_trash") {
        const todo = item.parentElement;
        todo.classList.toggle("fall")
        todo.remove();
    }
}
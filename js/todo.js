const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
};

toDoForm.addEventListener("submit",handleToDoSubmit);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

      parsedToDos.forEach(paintToDo);
    }


function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    const deletedTodo = li.querySelector("span").innerText;
    toDos.splice(toDos.indexOf(deletedTodo), 1);
    saveToDos();
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText="X";
    
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click",deleteTodo);
    toDoList.appendChild(li);
    
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value='';
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}

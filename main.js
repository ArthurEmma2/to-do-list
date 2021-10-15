//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');



//Event listeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click', deletecheck);



//function

function addTodo(event){
    //prevent form by default
    event.preventDefault()

    const todoEl = document.createElement("div");
    todoEl.classList.add("todo")
    //create li
     const newTodo = document.createElement("li")
     newTodo.innerText = todoInput.value;
     newTodo.classList.add("todo-item")
     todoEl.appendChild(newTodo);

    // check mark button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class= "fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoEl.appendChild(completedButton);
    // check trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoEl.appendChild(trashButton);
    //append to list
   todoList.appendChild(todoEl)
    //clear todo
   todoInput.value = ''
}

function  deletecheck(e){
    const item = e.target
    //delete todo
    if (item.classList[0] ==="trash-btn"){
        const todo = item.parentElement
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        
//CHECK MARK
    }
    
    if (item.classList[0]==="complete-btn"){
        const todo = item.parentElement
        todo.classList.add("completed")
    }
}

 



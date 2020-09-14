import {TodoList} from "./components/ToDoList.js"
import {TodoItem} from "./store/TodoItem.js"

class TodoApp {
    constructor(){
        //TodoList();
        //const todoItem = new TodoItem();
        document.querySelector('#new-todo-title').addEventListener("keydown", this.addTodoItem);
        document.querySelector('#todo-list').addEventListener("click", this.itemEvent);
    }

    addTodoItem = (e) => {
        if (e.key === "Enter") {
            let ul = document.querySelector('#todo-list');
            let inputValue = document.querySelector('#new-todo-title');
            let list = `<li class="completed">
                            <div class="view">
                                <input class="toggle" checked="true" type="checkbox"/>
                                <label class="label">${inputValue.value}</label>
                                <button class="destroy"></button>
                            </div>
                            <input class="edit" value="${inputValue.value}" />
                        </li>`;
            ul.innerHTML += list;
        }
    }

    itemEvent = (e) => {
        if (e.target.className === "toggle") {
            e.target.offsetParent.className = e.target.offsetParent.className === "completed" ? "" : "completed";
        }

        if (e.target.className === "destroy") {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    }
}

new TodoApp();

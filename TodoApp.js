import {TodoList} from "./components/ToDoList.js"
import {TodoItem} from "./store/TodoItem.js"

class TodoApp {
    constructor(){
        //TodoList();
        //const todoItem = new TodoItem();
        document.querySelector('#new-todo-title').addEventListener("keydown", this.addTodoItem);
    }

    addTodoItem = (e) => {
        if (e.key === "Enter") {
            let ul = document.querySelector('#todo-list');
            let inputValue = document.querySelector('#new-todo-title');
            let list = `<li>
                            <div class="view">
                                <input class="toggle" type="checkbox"/>
                                <label class="label">${inputValue.value}</label>
                                <button class="destroy"></button>
                            </div>
                            <input class="edit" value="${inputValue.value}" />
                        </li>`;
            ul.innerHTML += list;
        }
    }

    
}

new TodoApp();

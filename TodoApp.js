import {TodoList} from "./components/ToDoList.js"
import {TodoItem} from "./store/TodoItem.js"

class TodoApp {
    constructor(){
        //TodoList();
        //const todoItem = new TodoItem();
        document.querySelector('#new-todo-title').addEventListener("keydown", this.addTodoItem);
        document.querySelector('#todo-list').addEventListener("click", this.listClickEventHandler);
        document.querySelector('#todo-list').addEventListener("dblclick", this.listDblClickEventHandler);
        document.querySelector('#todo-list').addEventListener("keydown", this.listKeydownEventHandler);
    }

    addTodoItem = (e) => {
        if (e.key === "Enter") {
            let ul = document.querySelector('#todo-list');
            let inputValue = document.querySelector('#new-todo-title');
            let list = `<li class="">
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

    listClickEventHandler = (e) => {
        if (e.target.className === "toggle") {
            e.target.offsetParent.className = e.target.offsetParent.className === "completed" ? "" : "completed";
        }

        if (e.target.className === "destroy") {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    }

    listDblClickEventHandler = (e) => {
        if (e.target.className === "label") {
            e.target.offsetParent.className = "editing";
        }
    }

    listKeydownEventHandler = (e) => {//이제 state 관리의 필요성 생김
        if (e.key === "Escape") {//esc 눌렀을때는 원래 값 유지
            //ex) 
        }
        if (e.key === "Enter") {//Enter 시 값 수정
            const inputValue = e.target.value;
            //e.target.innerHTML = `<input class="edit" value="${inputValue}">`
            e.target.offsetParent.querySelector('.label').innerText = inputValue;
            // const label = document.querySelector('.label');
            // label.innerText = inputValue;
            e.target.offsetParent.className = "";
            //this.setState({e.target: e.target.value})
        }
    }
}

new TodoApp();

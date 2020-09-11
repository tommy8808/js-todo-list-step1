import {TodoList} from "./components/ToDoList.js"
import {TodoItem} from "./store/TodoItem.js"

function TodoApp() {
    
    TodoList();
    console.log('hello world!!');
    const todoItem = new TodoItem();
    todoItem.itemText = "55";
    console.log(todoItem.itemText);
}
TodoApp();

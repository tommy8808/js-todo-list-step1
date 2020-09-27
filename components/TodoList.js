import { TODO_STATE } from "../domain/index.js";

const getStateClass = state => {
  return state === TODO_STATE.COMPLETED ? 'class="completed"' :
  state === TODO_STATE.EDITING   ? 'class="editing"'   :
  '';
}
export const TodoList = class {

  #state; #target;

  constructor (target) {
    this.#target = target;
    this.#setState({
        items: []
    })

    this.#target.addEventListener("click", this.listClickEventHandler);
  }

  listClickEventHandler = (e) => {
    const {items} = this.#state;
    const foundIndex = this.getTargetIndex(items, e.target.offsetParent.id);

    if (e.target.className === "toggle") {
        const todoItem = items[foundIndex];
        todoItem.state = e.target.checked ? TODO_STATE.COMPLETED : TODO_STATE.TODO;
        items[foundIndex] = { ...todoItem};
        this.#setState({ items: [...items ]});
    }

    if (e.target.className === "destroy") {
        items.splice(foundIndex, 1);
        this.#setState({ items: [ ...items]});
    }
  }

  getTargetIndex(items, targetId) {
    return items.findIndex((item) => item.id === targetId);
  }
  
  #render () {
    const {items} = this.#state;
    this.#target.innerHTML = items.map(({id, state, title}) => `
        <li id=${id} ${ getStateClass(state)} >
        <div class="view">
            <input class="toggle" type="checkbox" ${ state === TODO_STATE.COMPLETED ? 'checked' : ''}/>
            <label class="label">${title}</label>
            <button class="destroy"></button>
        </div>
        ${ state === TODO_STATE.EDITING ?
            `<input class="edit" value="${title}" />` : '' }
        </li>
    `).join('');
  }
  
  #initEventListener () {

    //this.#addToggleEvent();
    //this.#addRemoveEvent();
    
  }

  #addToggleEvent() {
    const toggleButtons = this.#target.querySelectorAll('.toggle') || [];
    const {items} = this.#state;
    toggleButtons.forEach((v, key) => {
      v.addEventListener('change', ({ target }) => {
        const todoItem = items[key];
        todoItem.state = target.checked ? TODO_STATE.COMPLETED : TODO_STATE.TODO;
        items[key] = { ...todoItem};
        this.#setState({ items: [...items ]});
        })
    })
  }

  #addRemoveEvent() {
    const destroyButtons = this.#target.querySelectorAll('.destroy') || [];
    const { items } = this.#state;
    destroyButtons.forEach((v, key) => v.addEventListener('click', ({ target }) => {
      items.splice(key, 1);
      this.#setState({ items: [ ...items]});
    }))
  }
  
  #setState (payload) {
    this.#state = {...this.#state, ...payload};
    this.#render();
    //this.#initEventListener();
  }

  addItem (itemTitle) {
    this.#setState({
      items: [
        ...this.#state.items,
        { title: itemTitle, state: TODO_STATE.TODO, id: this.guid()} 
      ],
    });
  }

  guid() {
    function s4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
} 
 

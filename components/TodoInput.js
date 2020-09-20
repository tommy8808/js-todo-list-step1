export const TodoInput = class {

  #state; #target; #props;

  constructor (target, props) {
    this.#target = target;
    this.#props = props;
    this.#state = {
      todoItem: ''
    };
    this.#initEventListener();
  }

  #render () {

  }

  #initEventListener () {
    this.#target.addEventListener('input', ({ target }) => {
      this.#setState({ todoItem: target.value});
    })
    this.#target.addEventListener('keydown', ({ key, target }) => {
      if (key === 'Enter') {
        if (!target.value) return false;
        this.#props.addTodoItem(this.#state.todoItem);
        this.#reset();
      }
    })
  }

  #setState (payload) {
    this.#state = { ...this.#state, ...payload};
  }

  #reset () {
    this.#setState({ todoItem: ''});
    this.#target.value = '';
  }
}

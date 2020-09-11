export class TodoItem {
    constructor(newVal) {
        this._value = newVal || "";
        this.complete = false;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
    }

}

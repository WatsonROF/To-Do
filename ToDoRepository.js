class ToDoRepository {
    constructor() {
        this.key = "TODOS";
        this.arrayTodos = [];
        localStorage.setItem(this.key, JSON.stringify(this.arrayTodos)); 
    }

    getStorage() {
        return JSON.parse(localStorage.getItem(this.key));
    }

    setStorage(todo) {
        this.arrayTodos.push(todo)
        localStorage.setItem(this.key, JSON.stringify(this.arrayTodos));
    }
}
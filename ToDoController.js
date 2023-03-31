class ToDoController {
    constructor() {
        this.content = document.querySelector("#content");
        this.inputToDo = document.querySelector("#todo");
        this.buttonAdd = document.querySelector("#button-add-todo");
        this.repository = new ToDoRepository();
        this.init();
    }

    init() {
        this.buttonAdd.addEventListener("click", () => {
            let todoModel = new ToDo(this.inputToDo.value);
            this.addTodo(todoModel);
        })
        this.renderizaTodos();
    }

    addTodo(todo) {
        this.content.innerHTML = "";
        this.repository.setStorage(todo);
        this.renderizaTodos();
    }

    renderizaTodos() {
        this.repository.getStorage().forEach(element => {
            let view = new ToDoView(element);
            this.content.innerHTML += view.template();
        });
    }
    
}
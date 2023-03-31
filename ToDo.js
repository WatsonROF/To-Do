class ToDo {
    constructor(content) {
        this.done = false;
        this.content = content;
    }

    set changeDone(done) {
        this.done = done;
    }
}
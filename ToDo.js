var id = 1;
class ToDo {
    constructor(content) {
        this.id = id++;
        this.done = false;
        this.content = content;
    }

    set changeDone(done) {
        this.done = done;
    }
}
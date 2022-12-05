class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }

    changeTitle(newTitle) {
        if (newTitle.length > 2 && newTitle.trim() !== "") {
            this.title = newTitle;
        }
    }

    changeDescription(newDesc) {
        this.description = newDesc;
    }

    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    changePriority(newPriority) {
        this.priority = newPriority;
    }

    toggleIsDone() {
        this.isDone = !this.isDone;
    }

}

export default Todo;


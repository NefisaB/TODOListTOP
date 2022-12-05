class Project {
    constructor(name) {
        this.name = name;
        this.items = new Array();
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].title === item.title) {
                this.items.splice(i, 1);
                break;
            }
        }
    }

    getItems() {
        return this.items;
    }
}

export default Project;
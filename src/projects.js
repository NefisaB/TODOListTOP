import Todo from "./todoItem";
import Project from "./projectItem";

const project1 = new Project("Blog");
for (let i = 0; i < 5; i++) {
    const item = new Todo("Blog item", "", "today", "low");
    project1.addItem(item);
}

const project2 = new Project("Garden");
for (let i = 0; i < 4; i++) {
    const item = new Todo(`${i + 1} garden item`, "", "tomorrow", "high");
    project2.addItem(item);
}

const projects = [project1, project2];

export default projects;
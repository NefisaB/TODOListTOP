import "./style.css";
import Todo from "./todoItem";
import Project from "./projectItem";

const body = document.querySelector("body");
body.classList.add("yo");

const item1 = new Todo("First Item", "", "hi", "low", false);
console.log(item1);

const project1 = new Project("kitchen");
project1.addItem(item1);
project1.addItem(item1);
project1.addItem(item1);
console.log(project1);
for (let item of project1.getItems()) {
    console.log(item.title);
}

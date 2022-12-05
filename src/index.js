import "./style.css";
import Todo from "./todoItem";

const body = document.querySelector("body");
body.classList.add("yo");

const item1 = new Todo("First Item", "", "hi", "low", false);
console.log(item1);

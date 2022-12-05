import "./style.css";
import Todo from "./todoItem";
import Project from "./projectItem";

export const DOMHandler = (function () {

    const body = document.querySelector("body");
    const main = document.createElement("main");
    body.append(main);
    const h1 = document.createElement("h1");
    h1.textContent = "To do list";
    main.append(h1);
    const content = document.createElement("div");
    content.classList.add("content");
    main.append(content);

    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projects");
    const projectsHeading = document.createElement("h2");
    projectsHeading.textContent = "projects";
    projectsDiv.append(projectsHeading);
    content.append(projectsDiv);


    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("items");
    const itemsHeading = document.createElement("h2");
    itemsHeading.textContent = "to do...";
    itemsDiv.append(itemsHeading);
    content.append(itemsDiv);

    const createProjectsList = (projects) => {
        const ul = document.createElement("ul");
        for (let project of projects) {
            const li = document.createElement("li");
            li.textContent = project.name;
            ul.append(li);
        }

        projectsDiv.append(ul);
    }

    const createItemsList = (project) => {
        itemsHeading.textContent = project.name;
        const ul = document.createElement("ul");
        for (let item of project.getItems()) {
            const li = document.createElement("li");
            li.textContent = item.title;
            ul.append(li);
        }
        itemsDiv.append(ul);

    }


    return {
        createProjectsList,
        createItemsList,
    };

})();


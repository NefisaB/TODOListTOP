import "./style.css";
import Todo from "./todoItem";
import Project from "./projectItem";

export const DOMHandler = (function () {


    const addProject = (project) => {
        // save project to storage, to be done
        const projectsList = document.querySelector(".project-list");
        const li = document.createElement("li");
        li.textContent = project.name;
        li.addEventListener("click", createItemsList.bind(null, project));
        projectsList.appendChild(li);
        createItemsList(project);
    }

    const addNewProject = () => {
        if (projectInput.value.trim().length > 3) {
            const project = new Project(projectInput.value);
            addProject(project);
        }
        projectInput.value = "";
    }

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
    const projectForm = document.createElement("div");
    const projectInput = document.createElement("input");
    projectInput.setAttribute("type", "text");
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "Add Project";
    newProjectButton.addEventListener("click", addNewProject);
    projectForm.appendChild(projectInput);
    projectForm.appendChild(newProjectButton);
    projectsDiv.append(projectForm);
    content.append(projectsDiv);


    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("items");
    const itemsHeading = document.createElement("h2");
    itemsHeading.textContent = "to do...";
    itemsDiv.append(itemsHeading);
    content.append(itemsDiv);

    const createProjectsList = (projects) => {
        const ul = document.createElement("ul");
        ul.classList.add("project-list");
        for (let project of projects) {
            console.log(project);
            const li = document.createElement("li");
            li.textContent = project.name;
            li.addEventListener("click", createItemsList.bind(null, project));
            ul.append(li);
        }

        projectsDiv.insertBefore(ul, projectForm);
    }

    const createItemsList = (project) => {
        itemsDiv.replaceChildren(itemsHeading);
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


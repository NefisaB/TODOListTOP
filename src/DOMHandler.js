import "./style.css";
import Todo from "./todoItem";
import Project from "./projectItem";
import projects from "./projects";

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

    function createNewTodoForm() {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-div");
        const formHeading = document.createElement("h2");
        formHeading.textContent = "add new todo";
        todoDiv.append(formHeading);

        const todoForm = document.createElement("form");
        todoForm.setAttribute("onsubmit", "event.preventDefault()");

        const titleFieldset = document.createElement("fieldset");
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "title";
        const titleInput = document.createElement("input");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("type", "text");
        titleFieldset.append(titleLabel);
        titleFieldset.append(titleInput);
        todoForm.append(titleFieldset);

        const descriptionFieldset = document.createElement("fieldset");
        const descLabel = document.createElement("label");
        descLabel.textContent = "description";
        const descInput = document.createElement("textarea");
        descInput.setAttribute("name", "description");
        descInput.setAttribute("rows", "5");
        descriptionFieldset.append(descLabel);
        descriptionFieldset.append(descInput);
        todoForm.append(descriptionFieldset);

        const dateFieldset = document.createElement("fieldset");
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "due date";
        const dateInput = document.createElement("input");
        dateInput.setAttribute("name", "dueDate");
        dateInput.setAttribute("type", "date");
        dateFieldset.append(dateLabel);
        dateFieldset.append(dateInput);
        todoForm.append(dateFieldset);

        const priorityFieldset = document.createElement("fieldset");
        const priorLabel = document.createElement("label");
        priorLabel.textContent = "high priority";
        const priorInput = document.createElement("input");
        priorInput.setAttribute("type", "checkbox");
        priorInput.setAttribute("name", "priority");
        priorityFieldset.append(priorInput);
        priorityFieldset.append(priorLabel);
        todoForm.append(priorityFieldset);

        const addTodoBtn = document.createElement("button");
        addTodoBtn.textContent = "add";
        addTodoBtn.setAttribute("type", "submit");
        addTodoBtn.addEventListener("click", addTodoToProject.bind(null, todoForm));

        todoForm.append(addTodoBtn);
        todoDiv.append(todoForm);
        content.append(todoDiv);
    }

    // updating items on a project, to be implemented
    const addItemToProject = (project, item) => {
        projects.map(proj => {
            if (proj.name === project) {
                proj.items.push(item);
                console.log("Successfully added item to project!");
            }
        });
    }

    const addTodoToProject = (form) => {
        const newTodoItem = new Todo(form.title.value, form.description.value, form.dueDate.value, form.priority.checked);
        const currentProject = itemsDiv.firstChild.textContent;
        console.log(currentProject);
        addItemToProject(currentProject, newTodoItem);
        content.removeChild(content.children[2]);
        addNewTodoToItemsList(newTodoItem);
    }

    const addNewTodoToItemsList = (item) => {
        const ul = document.querySelector(".items-list");
        const li = document.createElement("li");
        li.textContent = item.title;
        ul.append(li);
    }

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
        if (content.children[2]) {
            content.removeChild(content.lastChild);
        }
        itemsDiv.replaceChildren(itemsHeading);
        itemsHeading.textContent = project.name;

        const ul = document.createElement("ul");
        ul.classList.add("items-list");
        for (let item of project.getItems()) {
            const li = document.createElement("li");
            li.textContent = item.title;
            ul.append(li);
        }
        itemsDiv.append(ul);

        const addNewTodoBtn = document.createElement("button");
        addNewTodoBtn.textContent = "add new todo";
        addNewTodoBtn.addEventListener("click", createNewTodoForm);

        itemsDiv.append(addNewTodoBtn);

    }

    return {
        createProjectsList,
        createItemsList,
    };

})();


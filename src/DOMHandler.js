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
        addItemToProject(currentProject, newTodoItem);
        content.removeChild(content.children[2]);
        addNewTodoToItemsList(newTodoItem);
    }

    const addNewTodoToItemsList = (item) => {
        const ul = document.querySelector(".items-list");
        ul.append(createLi(item));
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

    const showTodoDetails = (li) => {
        const paragraphs = li.querySelectorAll("p");
        for (let p of paragraphs) {
            p.classList.toggle("hidden");
        }
    }

    const updateTodoItem = (li) => {
        console.log(li);
    }

    const deleteTodoItem = (li) => {
        document.querySelector(".items-list").removeChild(li);
        // to implement - delete item from project in memory
    }

    const toggleDone = (li) => {
        li.firstChild.classList.toggle("line-through");
        // implement isDone to todo class
    }

    const createLi = (item) => {
        const li = document.createElement("li");
        const liTitle = document.createElement("span");
        liTitle.textContent = item.title;
        const buttonsDiv = document.createElement("div");
        const btnDetails = document.createElement("button");
        btnDetails.textContent = "...";
        btnDetails.addEventListener("click", showTodoDetails.bind(null, li));
        const btnEdit = document.createElement("button");
        btnEdit.textContent = "edit";
        btnEdit.addEventListener("click", updateTodoItem.bind(null, li));
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "delete";
        btnDelete.addEventListener("click", deleteTodoItem.bind(null, li));
        const btnIsDone = document.createElement("input");
        btnIsDone.setAttribute("type", "checkbox");
        btnIsDone.addEventListener("change", toggleDone.bind(null, li));
        buttonsDiv.append(btnDetails, btnEdit, btnDelete, btnIsDone);
        const descPar = document.createElement("p");
        descPar.textContent = item.description || "No description yet...";
        descPar.classList.add("hidden");
        const datePar = document.createElement("p");
        datePar.textContent = `Due date: ${item.dueDate || "Whenever..."}`;
        datePar.classList.add("hidden");
        li.append(liTitle, buttonsDiv, descPar, datePar);

        return li;
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
            ul.append(createLi(item));
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


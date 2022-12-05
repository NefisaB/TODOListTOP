import Todo from "./todoItem";
import Project from "./projectItem";
import { DOMHandler } from "./DOMHandler";
import projects from "./projects";

DOMHandler.createProjectsList(projects);
DOMHandler.createItemsList(projects[0]);
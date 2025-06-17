import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";


export class TodoController {
    constructor() {
        AppState.on('todo', this.drawTodos)
        AppState.on('identity', this.getTodos)

        // TODO get your todos from the API, make sure the user is logged in before trying to get them. (reference NASA or Spells)
    }

    drawTodos() {
        const todo = AppState.todo
        console.log(todo);
        let todoContent = ''
        todo.forEach(todo => {
            // console.log('todo instance', todo);
            todoContent += todo.todoHTMLTemplate
        })
        const todoElm = document.getElementById('todo-here')
        todoElm.innerHTML = todoContent
    }


    async TodoCreate() {
        try {
            event.preventDefault()
            const formElm = event.target
            const todoFormData = getFormData(formElm)
            await todoService.todoCreate(todoFormData)
            // console.log('button works');
        } catch (error) {
            console.error('todo could not be created', error);
        }
    }

    async getTodos() {
        try {
            await todoService.getTodos()
        } catch (error) {
            console.error('Could not load todos', error)
        }
    }

    async confirmDelete(id) {
        const confirmed = window.confirm('are you sure?')
        if (!confirmed) { return }
        await todoService.confirmDelete(id)
        await this.getTodos()
    }
    async todoChecked(id, todoisChecked) {
        try {
            await todoService.todoChecked(id, todoisChecked)
            await this.getTodos()
        } catch (error) {
            console.error('check checked wrong', error);

        }
    }


    // TODO reference spellbook for put request
    // TODO reference gregslist for delete request
}
import { AppState } from "../AppState.js";
import { TodoController } from "../controllers/TodoController.js";
import { Todo } from "../models/Todo.js"
import { api } from "../utils/Axios.js"


class TodoService {

    async todoCreate(todoName) {
        const response = await api.post('api/todos', todoName)
        // console.log('created the todo name?', response.data);
        const newTodo = new Todo(response.data)
        AppState.todo.push(newTodo)
    }

    async getTodos() {
        const response = await api.get('api/todos')
        // console.log('got todo', response.data);
        const todo = response.data.map(pojo => new Todo(pojo))
        AppState.todo = todo
    }

    async confirmDelete(id) {
        console.log('delete thing id', id);
        const response = await api.delete(`api/todos/${id}`)
    }

    async todoChecked(id, todoisChecked) {
        await api.put(`api/todos/${id}`, { completed: todoisChecked })
    }
}


export const todoService = new TodoService
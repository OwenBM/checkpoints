

export class Todo {
  constructor(data) {
    // console.log('todo data', data);
    this.Description = data.Description || data.description
    this.isCompleted = data.completed
    this.id = data.id

  }

  get todoHTMLTemplate() {
    return `
          <div class="m-2 d-flex justify-content-evenly align-items-center">
            <input type="checkbox" id="todo-${this.id}" name="todo-${this.id}" ${this.isCompleted ? 'checked' : ''} onchange="app.todoController.todoChecked('${this.id}', this.checked)"
            <label for="${this.id}">${this.Description}</label><br>
            <button type="button" class="btn btn-danger mdi mdi-skull-crossbones" onclick="app.todoController.confirmDelete('${this.id}')"></button>
          </div>
        `
  }
}
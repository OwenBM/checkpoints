import { AuthController } from './Auth/AuthController.js';
import { BackgroundImageController } from './controllers/BackgroundImageController.js';
import { ClockController } from './controllers/ClockController.js';
import { TodoController } from './controllers/TodoController.js';
import { WeatherController } from './controllers/WeatherController.js';
import { Todo } from './models/Todo.js';

class App {
  authController = new AuthController
  // ExampleController = new ExampleController() // ☑️ you can remove this - example only
  weatherController = new WeatherController
  clockController = new ClockController
  backgroundImageController = new BackgroundImageController
  todoController = new TodoController
}

window['app'] = new App()



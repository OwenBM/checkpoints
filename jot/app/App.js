import { ExampleController } from './controllers/ExampleController.js';
import { JotCardController } from './controllers/JotCardController.js';
import { JotController } from './controllers/JotController.js';
import { jotService } from './services/JotService.js';


class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  JotController = new JotController()

  JotCardController = new JotCardController

  JotService = jotService;
}

window['app'] = new App()



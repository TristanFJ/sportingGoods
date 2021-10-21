import {
  ShirtsController
} from "./Controllers/ShirtsController.js";

class App {
  // valuesController = new ValuesController();
  shirtsController = new ShirtsController();

}

window["app"] = new App();
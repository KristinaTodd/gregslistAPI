import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js";
import HousesController from "./Controllers/HousesController.js"

class App {
  carsController = new CarsController();
  jobsController = new JobsController();
  housesController = new HousesController();
}

window["app"] = new App();

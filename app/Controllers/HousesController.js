import HousesService from "../Services/HousesService.js"
import store from "../store.js"

function _draw() {
  let houses = store.State.houses;
  let housesElem = document.getElementById("houses");
  let template = ""

  houses.forEach(house => {
    template += house.Template;
  })
  housesElem.innerHTML = template;
}

export default class HousesController {
  constructor() {
    store.subscribe("houses", _draw);
    this.getAllHouses();
  }

  getAllHouses() {
    HousesService.getHouses();
  }

  addHouse(event) {
    event.preventDefault();

    let formData = event.target

    let newHouse = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    };
    HousesService.addHouse(newHouse);
    formData.reset();

    $("#house-form").modal("toggle")
  }

  bid(id, price) {
    HousesService.editHouse(id, { price });
  }

  delete(id) {
    HousesService.deleteHouse(id);
  }
}
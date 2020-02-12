import House from "../Models/House.js"
import store from "../store.js"

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 7000
})

class HousesService {
  getHouses() {
    _api
      .get("")
      .then(res => {
        let apiHouses = res.data.data.map(h => new House(h));
        store.commit("houses", apiHouses)
      })
      .catch(error => {
        console.error(error);
      })
  }

  getHousesbyId(id) {
    _api.get(id);
  }

  addHouse(newHouse) {
    _api
      .post("", newHouse)
      .then(res => {
        let newApiHouse = new House(res.data.data);
        let houses = [...store.State.houses, newApiHouse];
        store.commit("houses", houses)
      })
      .catch(error => {
        console.error(error);
      });
  }

  editHouse(id, update) {
    _api
      .put(id, update)
      .then(res => {
        let house = store.State.houses.find(h => h._id == id)
        for (let prop in update) {
          house[prop] = update[prop];
        }
        store.commit("houses", store.State.houses)
      })
      .catch(error => {
        console.error(error);
      })
  }

  deleteHouse(id) {
    _api
      .delete(id)
      .then(() => {
        let filteredHouses = store.State.houses.filter(h => h._id != id)
        store.commit("houses", filteredHouses);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const service = new HousesService();
export default service
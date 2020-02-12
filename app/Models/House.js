export default class House {

  constructor(data) {
    this._id = data._id;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.price = data.price;
    this.year = data.year;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }

  get Template() {
    return `
              <div class="col-12">
                <div class="card">
                  <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">${this.bedrooms}beds - ${this.bathrooms}baths - ${this.year}</h5>
                      <p class="card-text">${this.description} <b>$${this.price}</b></p>
                      <button class="btn btn-info" onclick="app.housesController.bid('${this._id}'
                      , ${this.price + 5000})">BID $5000</button>
                      <button class="btn btn-danger" onclick="app.housesController.delete('${this._id}')">
                      DELETE</button>
                </div>
                </div>
              </div>
    `
  }

}
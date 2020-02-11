export default class Job {
  constructor(data) {

    this._id = data._id;
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;

  }
  get Template() {
    return `
              <div class="col-12 p-1 text-center">
              <div class="card">
              <div class="card-body">
                <h5 class="card-title">${this.jobTitle}</h5>
                <h5><b>$${this.rate} - ${this.company} - ${this.hours}hours</b></h5>
                <p class="card-text">${this.description} </p>
                <button class="btn btn-danger" onclick="app.jobsController.delete('${
      this._id}')">DELETE</button>
              </div>
            </div>
              </div>
      `;
  }
}
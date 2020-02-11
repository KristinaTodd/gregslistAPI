import jobService from "../Services/JobsService.js"
import store from "../store.js"
import JobsService from "../Services/JobsService.js";


function _draw() {
  let jobs = store.State.jobs;
  let jobsElem = document.getElementById("jobs");
  let template = "";

  jobs.forEach(job => {
    template += job.Template;
  });

  jobsElem.innerHTML = template;
}


export default class JobsController {
  constructor() {
    store.subscribe("jobs", _draw);
    this.getAllJobs();
  }

  getAllJobs() {
    JobsService.getJobs();
  }

  addJob(event) {
    event.preventDefault();

    let formData = event.target;

    let newJob = {
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value
    }
    console.log(newJob)
    JobsService.addJob(newJob);
    formData.reset();

    $("#job-form").modal("toggle");

  }

  delete(id) {
    JobsService.deleteJob(id);
  }
}
import Job from "../Models/Job.js"
import store from "../store.js"

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jobs",
  timeout: 3000
});

class JobsService {
  getJobs() {
    _api
      .get("")
      .then(res => {
        let apiJobs = res.data.data.map(j => new Job(j));
        store.commit("jobs", apiJobs);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getJobById(id) {
    _api.get(id);
  }

  addJob(newJob) {
    _api
      .post("", newJob)
      .then(res => {
        let newApiJob = new Job(res.data.data);
        let jobs = [...store.State.jobs, newApiJob];
        store.commit("jobs", jobs);
      })
      .catch(error => {
        console.error(error);
      });
  }

  deleteJob(id) {
    _api
      .delete(id)
      .then(() => {
        let filteredJobs = store.State.jobs.filter(j => j._id != id);
        store.commit("jobs", filteredJobs);
      })
      .catch(error => {
        console.error(error);
      })
  }
}

const service = new JobsService();
export default service;
class Audiences {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  list(params) {
    return this.axiosInstance.get("/audiences", params);
  }

  create(data) {
    return this.axiosInstance.post("/audiences", data);
  }

  get(audienceId) {
    return this.axiosInstance.get(`/audiences/${audienceId}`);
  }

  delete(audienceId) {
    return this.axiosInstance.delete(`/audiences/${audienceId}`);
  }
}

module.exports = Audiences;

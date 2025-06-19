class Emails {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  list(params = {}) {
    return this.axiosInstance.get("/emails", { params });
  }

  send(data) {
    return this.axiosInstance.post("/emails", data);
  }
}

module.exports = Emails;

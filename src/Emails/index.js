class Emails {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  send(data) {
    return this.axiosInstance.post("/emails", data);
  }
}

module.exports = Emails;

class Contacts {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  create(data) {
    return this.axiosInstance.post("/contacts", data);
  }
}

module.exports = Contacts;

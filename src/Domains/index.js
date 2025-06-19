class Domains {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  list(params) {
    return this.axiosInstance.get("/domains", params);
  }

  create(data) {
    return this.axiosInstance.post("/domains", data);
  }

  get(domainId) {
    return this.axiosInstance.get(`/domains/${domainId}`);
  }

  delete(domainId) {
    return this.axiosInstance.delete(`/domains/${domainId}`);
  }

  check(domainId) {
    return this.axiosInstance.get(`/domains/${domainId}/check`);
  }
}

module.exports = Domains;

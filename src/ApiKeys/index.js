class ApiKeys {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  list(params) {
    return this.axiosInstance.get("/api-keys", params);
  }

  create(data) {
    return this.axiosInstance.post("/api-keys", data);
  }

  delete(apiKeyId) {
    return this.axiosInstance.delete(`/api-keys/${apiKeyId}`);
  }
}

module.exports = ApiKeys;

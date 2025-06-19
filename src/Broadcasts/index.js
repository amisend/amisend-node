class Broadcasts {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  list(params) {
    return this.axiosInstance.get("/broadcasts", params);
  }

  create(data) {
    return this.axiosInstance.post("/broadcasts", data);
  }

  get(broadcastId) {
    return this.axiosInstance.get(`/broadcasts/${broadcastId}`);
  }

  update({ broadcastId, ...data }) {
    return this.axiosInstance.patch(`/broadcasts/${broadcastId}`, data);
  }

  delete(broadcastId) {
    return this.axiosInstance.delete(`/broadcasts/${broadcastId}`);
  }

  send(broadcastId) {
    return this.axiosInstance.post(`/broadcasts/${broadcastId}/send`);
  }

  unsubscribe({ broadcastId, contactId }) {
    return this.axiosInstance.patch(
      `/broadcasts/unsubscribe/${broadcastId}/${contactId}`
    );
  }
}

module.exports = Broadcasts;

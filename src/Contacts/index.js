class Contacts {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  list({ audienceId, ...params }) {
    return this.axiosInstance.get(`/audiences/${audienceId}/contacts`, {
      params,
    });
  }

  create({ audienceId, ...data }) {
    return this.axiosInstance.post(`/audiences/${audienceId}/contacts`, data);
  }

  update({ audienceId, contactId, ...data }) {
    return this.axiosInstance.put(
      `/audiences/${audienceId}/contacts/${contactId}`,
      data
    );
  }

  delete({ audienceId, contactId }) {
    return this.axiosInstance.delete(
      `/audiences/${audienceId}/contacts/${contactId}`
    );
  }
}

module.exports = Contacts;

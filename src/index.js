const Wrapper = require("./Wrapper");
const Emails = require("./Emails");
const Contacts = require("./Contacts");
const Domains = require("./Domains");
const Audiences = require("./Audiences");
const ApiKeys = require("./ApiKeys");
const Broadcasts = require("./Broadcasts");

class Amisend {
  constructor({ apiKey, baseURL, timeout }) {
    const { axiosInstance } = new Wrapper({
      apiKey,
      baseURL,
      timeout,
    });
    this.emails = new Emails(axiosInstance);
    this.contacts = new Contacts(axiosInstance);
    this.domains = new Domains(axiosInstance);
    this.audiences = new Audiences(axiosInstance);
    this.apiKeys = new ApiKeys(axiosInstance);
    this.broadcasts = new Broadcasts(axiosInstance);
  }
}

module.exports = Amisend;

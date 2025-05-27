const Wrapper = require("./Wrapper");
const Emails = require("./Emails");
const Contacts = require("./Contacts");

class Amisend {
  constructor({ apiKey, baseURL, timeout }) {
    const { axiosInstance } = new Wrapper({
      apiKey,
      baseURL,
      timeout,
    });
    this.emails = new Emails(axiosInstance);
    this.contacts = new Contacts(axiosInstance);
  }
}

module.exports = Amisend;

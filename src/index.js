const Wrapper = require("./Wrapper");
const Emails = require("./Emails");

class Amisend {
  constructor({ apiKey, baseURL, timeout }) {
    const { axiosInstance } = new Wrapper({
      apiKey,
      baseURL,
      timeout,
    });
    this.emails = new Emails(axiosInstance);
  }
}

module.exports = Amisend;

const axios = require("axios");

class Wrapper {
  constructor({ baseURL, apiKey, timeout }) {
    const url = `https://api.amisend.com/`;
    this.apiKey = apiKey;

    this.axiosInstance = axios.create({
      baseURL: baseURL || url,
      timeout: timeout || 5000,
      headers: {
        "x-api-key": apiKey,
      },
    });

    this.setResponseInterceptors();
    this.setRequestInterceptors();
  }

  setResponseInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      async (error) => {
        if (error.isAxiosError) {
          return Promise.reject(new Error(error.response.data.error));
        }

        return Promise.reject(new Error(error.message));
      }
    );
  }

  setRequestInterceptors() {
    this.axiosInstance.interceptors.request.use(async (config) => {
      return config;
    });
  }
}

module.exports = Wrapper;

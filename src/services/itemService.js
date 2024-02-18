const axios = require("axios");
const helperService = require("../helpers/stopLightsHelpers");

const getItems = async (query, method) => {
  try {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNdW5lcm8iLCJleHAiOjE3MDgzNDU0NjQsInR5cGUiOiJBdXRob3JpemF0aW9uVG9rZW4iLCJjcmVhdGlvbkRhdGUiOjE3MDgyNTkwNjQsInVzZXJJZCI6MTEzLCJ2ZXJzaW9uIjoxfQ.tefsfNnXIN9wVT9Lu0lncj9fiaCK72UWOPKSJG2ZBro";
    const signature = await helperService.generateSignature(
      process.env.GET_ITEMS_URL,
      method,
      query,
      token
    );
    return signature;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getItems };

const axios = require("axios");

/**
 * Gets the current date and time formatted as ddMMyyyyHHmmss.
 * @private
 * @returns {string} The current date and time formatted as ddMMyyyyHHmmss.
 */
const _getCurrentDateTimeInFormat = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${day}${month}${year}${hours}${minutes}${seconds}`;
};

/**
 * Logs in a user by sending a POST request with the provided request body.
 * @async
 * @param {Object} body - The request body containing username and password.
 * @param {string} body.username - The username of the user.
 * @param {string} body.password - The password of the user.
 * @returns {Promise} A Promise that resolves with the response data upon successful login.
 * @throws {Error} If an error occurs during the login process.
 */
const login = async (body) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-GIFTLOV-DATE": `${_getCurrentDateTimeInFormat()}`,
    };
    const response = await axios.post(
      "https://staging.giftlov.com/api/Base/generateToken",
      body,
      {
        headers: headers,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { login };

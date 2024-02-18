const crypto = require("crypto");

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

const _sortedParams = (params) => {
  const sortedEntries = Object.entries(params).sort((a, b) => {
    return a[1].toString().localeCompare(b[1].toString());
  });
  const primitiveValues = sortedEntries.map((entry) => entry[1]);
  const concatenatedValues = primitiveValues.join("");
  return concatenatedValues;
};

const generateSignature = async (endPoint, method, queryParams, authToken) => {
  const concatenatedValues = _sortedParams(queryParams);
  const signatureString = `${endPoint}${method}${concatenatedValues}`;
  const signatureWithToken = `${signatureString}${_getCurrentDateTimeInFormat()}${authToken}`;
  const hashedSignature = crypto
    .createHash("sha512")
    .update(signatureWithToken + process.env.SECRET)
    .digest("hex");
  return hashedSignature;
};

module.exports = { generateSignature };

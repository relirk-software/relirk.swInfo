import axios from "axios";

const getSwData = async (url, endPoint) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/json/SW?url=${url}&endPoint=${endPoint}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default {
  getSwData
};

import axios from "axios";

export const getRequest = async (endpoint, params) => {
  try {
    const response = await axios.get(endpoint, params);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

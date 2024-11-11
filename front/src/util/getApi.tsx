import axios from "axios";

const get = async () => {
  try {
    const response = await axios.get(`${process.env.MY_URL}/auth/profile`, {});
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

const post = async () => {
  try {
    const response = await axios.post(`${process.env.MY_URL}/auth/profile`, {});
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export { get, post };

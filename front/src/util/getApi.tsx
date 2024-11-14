import axios from "axios";

const get = async (url: string) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

const post = async (url: string, data: any = {}) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}${url}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export { get, post };

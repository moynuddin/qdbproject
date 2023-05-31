import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users/1";

// import.meta.env.VITE_URI ||

export const getPosts = async (): Promise<unknown> => {
  const data = await axios.get(`${baseURL}/posts`);
  return data;
};

export const getuser = async (): Promise<unknown> => {
  const data = await axios.get(baseURL);
  return data;
};

export const deletePost = async (
  id: AxiosRequestConfig<unknown> | undefined
) => {
  const data = await axios.delete(baseURL, id);
  return data;
};

export const update = async (id: unknown) => {
  const data = await axios.put(baseURL, id);

  return data;
};

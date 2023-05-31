import axios, { AxiosRequestConfig } from "axios";

export const getPosts = async (): Promise<unknown> => {
  const data = await axios.get(`${import.meta.env.VITE_URI}/posts`);
  return data;
};

export const getuser = async (): Promise<unknown> => {
  const data = await axios.get(import.meta.env.VITE_URI);
  return data;
};

export const deletePost = async (
  id: AxiosRequestConfig<unknown> | undefined
) => {
  const data = await axios.delete(import.meta.env.VITE_URI, id);
  return data;
};

export const update = async (id: unknown) => {
  const data = await axios.put(import.meta.env.VITE_URI, id);

  return data;
};

import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.REACT_API_BASE_URL,
});

export const getRequest = async <T>(URL: string): Promise<T> => {
  const response = await axiosClient.get<T>(URL);
  return response.data;
};

export const postRequest = async <T>(URL: string, data: any) => {
  const response = await axiosClient.post<T>(URL, data);
  return response.data;
};

export const updateRequest = async (
  URL: string,
  id: string,
  updatedData: any
) => {
  return await axiosClient.put(`${URL}/${id}`, updatedData);
};

export const deleteRequest = async (URL: string, id: string) => {
  return await axiosClient.delete(`${URL}/${id}`);
};

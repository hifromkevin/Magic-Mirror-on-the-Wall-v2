import axios from 'axios';

const getAxiosClient = () =>
  axios.create({
    baseURL: process.env.REACT_API_BASE_URL,
  });

export const getRequest = async <T>(URL: string): Promise<T> => {
  const response = await getAxiosClient().get<T>(URL);
  return response.data;
};

export const postRequest = async <T>(URL: string, data: any) => {
  const response = await getAxiosClient().post<T>(URL, data);
  return response.data;
};

export const updateRequest = async (
  URL: string,
  id: string,
  updatedData: any
) => {
  return await getAxiosClient().put(`${URL}/${id}`, updatedData);
};

export const deleteRequest = async (URL: string, id: string): Promise<void> => {
  await getAxiosClient().delete(`${URL}/${id}`);
};

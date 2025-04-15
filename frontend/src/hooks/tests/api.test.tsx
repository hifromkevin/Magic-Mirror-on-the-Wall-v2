import axios from 'axios';
import { getRequest, postRequest, updateRequest, deleteRequest } from '../api';

jest.mock('axios');

const mockedAxiosInstance = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockReturnValue(mockedAxiosInstance as any);

describe('API Utility Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getRequest', () => {
    it('should call axios.get with the correct URL and return the response data', async () => {
      const mockResponse = { data: { message: 'Success' } };
      mockedAxiosInstance.get.mockResolvedValueOnce(mockResponse);

      const result = await getRequest<{ message: string }>('test-url');

      expect(mockedAxiosInstance.get).toHaveBeenCalledWith('test-url');
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('postRequest', () => {
    it('should call axios.post with the correct URL and payload', async () => {
      const mockResponse = { data: { id: 1, message: 'Created' } };
      mockedAxiosInstance.post.mockResolvedValueOnce(mockResponse);

      const result = await postRequest<{ id: number; message: string }>(
        'test-url',
        { name: 'Test' }
      );

      expect(mockedAxiosInstance.post).toHaveBeenCalledWith('test-url', {
        name: 'Test',
      });
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('updateRequest', () => {
    it('should call axios.put with the correct URL, ID, and payload', async () => {
      const mockResponse = { data: { id: 1, message: 'Updated' } };
      mockedAxiosInstance.put.mockResolvedValueOnce(mockResponse);

      const result = await updateRequest('test-url', '1', {
        name: 'Updated Test',
      });

      expect(mockedAxiosInstance.put).toHaveBeenCalledWith('test-url/1', {
        name: 'Updated Test',
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('deleteRequest', () => {
    it('should call axios.delete with the correct URL and ID', async () => {
      mockedAxiosInstance.delete.mockResolvedValueOnce({});

      await deleteRequest('test-url', '1');

      expect(mockedAxiosInstance.delete).toHaveBeenCalledWith('test-url/1');
    });
  });
});

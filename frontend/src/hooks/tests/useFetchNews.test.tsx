import { renderHook } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { useFetchNews } from '../useFetchNews';
import { newsMock } from '../../../__mocks__/newsMock';
import { TNewsResponse, INewsError } from '../../types/NewsTypes';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('useFetchNews', () => {
  it('should return loading state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isError: false,
      isLoading: true,
    });

    const { result } = renderHook(() => useFetchNews());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.news).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it('should return news data when successful', () => {
    const mockNewsData: TNewsResponse = newsMock as TNewsResponse;

    (useQuery as jest.Mock).mockReturnValue({
      data: mockNewsData,
      error: null,
      isError: false,
      isLoading: false,
    });

    const { result } = renderHook(() => useFetchNews());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.news).toEqual(mockNewsData);
    expect(result.current.error).toBeNull();
  });

  it('should return an error when the query fails', () => {
    const mockError: INewsError = {
      code: '500',
      message: 'Internal Server Error',
      status: '500',
    };

    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: mockError,
      isError: true,
      isLoading: false,
    });

    const { result } = renderHook(() => useFetchNews());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.news).toEqual([]);
    expect(result.current.error).toEqual(mockError);
  });
});

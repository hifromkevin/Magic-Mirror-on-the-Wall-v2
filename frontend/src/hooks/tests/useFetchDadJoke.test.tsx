import { renderHook } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { useFetchDadJoke } from '../useFetchDadJoke';
import { IDadJokeResponse, IDadJokeError } from '../../types/DadJokeTypes';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('useFetchDadJoke', () => {
  it('should return loading state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isError: false,
      isLoading: true,
    });

    const { result } = renderHook(() => useFetchDadJoke());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.joke).toBe('');
    expect(result.current.error).toBeNull();
  });
  it('should return dad joke data when successful', () => {
    const mockDadJokeData: IDadJokeResponse = {
      id: '1001',
      joke: "Why don't skeletons fight each other? They don't have the guts.",
      status: 200,
    };

    (useQuery as jest.Mock).mockReturnValue({
      data: mockDadJokeData,
      error: null,
      isError: false,
      isLoading: false,
    });

    const { result } = renderHook(() => useFetchDadJoke());
    expect(result.current.isLoading).toBe(false);
    expect(result.current.joke).toEqual(mockDadJokeData.joke);
    expect(result.current.error).toBeNull();
  });

  it('should return an error when the query fails', () => {
    const mockError: IDadJokeError = {
      message: 'Failed to fetch dad joke',
      status: 404,
    };

    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: mockError,
      isError: true,
      isLoading: false,
    });

    const { result } = renderHook(() => useFetchDadJoke());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.joke).toBe('');
    expect(result.current.error).toEqual(mockError);
  });
});

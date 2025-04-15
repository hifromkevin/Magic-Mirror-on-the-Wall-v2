import { renderHook } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { useFetchWeather } from '../useFetchWeather';
import { weatherMock } from '../../../__mocks__/weatherMock';
import {
  IWeatherResponse,
  IWeatherInternalError,
} from '../../types/WeatherTypes';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('useFetchWeather', () => {
  it('should return loading state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isError: false,
      isLoading: true,
    });

    const { result } = renderHook(() => useFetchWeather());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.weather).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should return weather data when successful', () => {
    const mockWeatherData: IWeatherResponse = weatherMock as IWeatherResponse;

    (useQuery as jest.Mock).mockReturnValue({
      data: mockWeatherData,
      error: null,
      isError: false,
      isLoading: false,
    });

    const { result } = renderHook(() => useFetchWeather());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.weather).toEqual(mockWeatherData);
    expect(result.current.error).toBeNull();
  });

  it('should return an error when the query fails', () => {
    const mockError: IWeatherInternalError = {
      code: '500',
      message: 'Internal Server Error',
      status: 500,
    };

    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: mockError,
      isError: true,
      isLoading: false,
    });

    const { result } = renderHook(() => useFetchWeather());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
    expect(result.current.error).toEqual(mockError);
    expect(result.current.weather).toBeNull();
  });
});

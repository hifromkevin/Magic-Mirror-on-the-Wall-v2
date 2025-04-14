import { useQuery } from '@tanstack/react-query';
import { getRequest } from './api';

import { IWeatherResponse, IWeatherInternalError } from '../types/WeatherTypes';

export const useFetchWeather = () => {
  const { data, error, isError, isLoading } = useQuery<
    IWeatherResponse,
    IWeatherInternalError
  >({
    queryKey: ['weather'],
    queryFn: () => getRequest('weather'),
    refetchOnWindowFocus: false,
  });

  return {
    weather: (data as IWeatherResponse) || null,
    error,
    isError,
    isLoading,
  };
};

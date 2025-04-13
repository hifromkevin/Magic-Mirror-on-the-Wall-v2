import { useQuery } from '@tanstack/react-query';
import { getRequest } from './api';

import { TWeatherResponse, IWeatherInternalError } from '../types/WeatherTypes';

export const useFetchWeather = () => {
  const { data, error, isError, isLoading } = useQuery<
    TWeatherResponse,
    IWeatherInternalError
  >({
    queryKey: ['weather'],
    queryFn: () => getRequest('weather'),
    refetchOnWindowFocus: false,
  });

  return { weather: data || null, error, isError, isLoading };
};

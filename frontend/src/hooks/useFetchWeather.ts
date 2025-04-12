import { useQuery } from '@tanstack/react-query';
import { getRequest } from './api';

import { TWeatherResponse } from '../types/WeatherTypes';

export const useFetchWeather = () => {
  const { data, error, isError, isLoading } = useQuery<TWeatherResponse>({
    queryKey: ['weather'],
    queryFn: () => getRequest('weather'),
    refetchOnWindowFocus: false,
  });

  return { weather: data || [], error, isError, isLoading };
};

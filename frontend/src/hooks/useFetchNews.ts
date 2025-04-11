import { useQuery } from '@tanstack/react-query';
import { getRequest } from './api';

import { TNewsResponse, INewsError } from '../types/NewsTypes';

export const useFetchNews = () => {
  const { data, error, isError, isLoading } = useQuery<
    TNewsResponse,
    INewsError
  >({
    queryKey: ['news'],
    queryFn: () => getRequest('news'),
    refetchOnWindowFocus: false,
  });

  return { news: data || [], error, isError, isLoading };
};

import { useQuery } from '@tanstack/react-query';
import { getRequest } from './api';

import { IDadJokeResponse, IDadJokeError } from '../types/DadJokeTypes';

export const useFetchDadJoke = () => {
  const { data, error, isError, isLoading } = useQuery<
    IDadJokeResponse,
    IDadJokeError
  >({
    queryKey: ['dadJoke'],
    queryFn: () => getRequest<IDadJokeResponse>('dadJoke'),
  });

  return { joke: data?.joke || '', error, isError, isLoading };
};

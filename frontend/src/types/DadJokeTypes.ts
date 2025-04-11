export interface IDadJokeResponse {
  id: string;
  joke: string;
  status: number;
}

export interface IDadJokeError {
  message: string;
  status: number;
}

export interface IDadJokeQuery {
  data: IDadJokeResponse | null;
  error: IDadJokeError | null;
  isError: boolean;
  isLoading: boolean;
}

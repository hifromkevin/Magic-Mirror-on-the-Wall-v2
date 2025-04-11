import { useFetchDadJoke } from '../../hooks/useFetchDadJoke';

const DadJoke = () => {
  const { joke, error, isError, isLoading } = useFetchDadJoke();

  if (isLoading) {
    return <div className="dadJokeContainer">Hi, Loading! I'm Dad!</div>;
  }
  if (isError) {
    return (
      <div className="dadJokeContainer">
        <p>Error: {error ? error.message : ''}</p>
      </div>
    );
  }

  return (
    <div className="dadJokeContainer">
      <p>Dad Joke: {joke}</p>
    </div>
  );
};

export default DadJoke;

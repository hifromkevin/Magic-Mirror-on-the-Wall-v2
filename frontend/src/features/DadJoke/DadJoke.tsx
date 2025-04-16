import { useFetchDadJoke } from '../../hooks/useFetchDadJoke';

import styles from './styles/DadJoke.module.scss';

const DadJoke = () => {
  const { joke, error, isError, isLoading } = useFetchDadJoke();

  if (isLoading) {
    return <div className={styles.dadJokeContainer}>Hi, Loading! I'm Dad!</div>;
  }
  if (isError) {
    return (
      <div className={styles.dadJokeContainer}>
        <p>Error: {error ? error.message : ''}</p>
      </div>
    );
  }

  return (
    <div className={styles.dadJokeContainer}>
      <p>{joke}</p>
    </div>
  );
};

export default DadJoke;

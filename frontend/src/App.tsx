// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import Weather from './features/Weather/Weather';
import DateAndTime from './features/DateAndTime/DateAndTime';
import DadJoke from './features/DadJoke/DadJoke';
import News from './features/News/News';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.upperSection}>
        <div className={styles.left}>
          <Weather />
        </div>
        <div className={styles.right}>
          <DateAndTime />
        </div>
      </div>
      <div className={styles.middleSection}>
        <DadJoke />
      </div>
      <div className={styles.bottomSection}>
        <News />
      </div>
    </div>
  );
};

export default App;

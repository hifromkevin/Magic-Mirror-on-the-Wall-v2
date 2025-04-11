// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import Weather from './features/Weather/Weather';
import DateAndTime from './features/DateAndTime/DateAndTime';
import DadJoke from './features/DadJoke/DadJoke';
import News from './features/News/News';

import './App.css';

const App = () => {
  return (
    <div className="appContainer">
      <div className="upperSection">
        <Weather />
        <DateAndTime />
      </div>
      <div className="middleSection">
        <DadJoke />
      </div>
      <div className="bottomSection">
        <News />
      </div>
    </div>
  );
};

export default App;

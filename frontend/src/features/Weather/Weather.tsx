// import getWeatherIcon from '../../utils/WeatherUtils';
import { useFetchWeather } from '../../hooks/useFetchWeather';

const Weather = () => {
  const { weather, error, isError, isLoading } = useFetchWeather();

  console.log('himom!', weather, error, isError, isLoading);
  return (
    <div className="weatherContainer">
      <h1>Weather</h1>

      {/* <img src={getWeatherIcon(1)} alt="Weather Icon" /> */}
    </div>
  );
};

export default Weather;

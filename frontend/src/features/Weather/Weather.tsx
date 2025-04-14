// import getWeatherIcon from '../../utils/WeatherUtils';
import { useFetchWeather } from '../../hooks/useFetchWeather';

import { getWeatherIcon } from '../../utils/WeatherUtils';

const Weather = () => {
  const { weather, error, isError, isLoading } = useFetchWeather();

  if (isLoading) return <div className="weatherContainer">Loading weather</div>;

  if (isError)
    return <div className="weatherContainer">{error ? error.message : ''}</div>;

  if (!weather)
    return <div className="weatherContainer">No weather data available</div>;

  return (
    <div className="weatherContainer">
      <h1>Weather</h1>
      <img
        src={getWeatherIcon(weather.current.weatherIcon)}
        alt={weather.current.weatherText}
        className="weather__today__icon"
      />
      <div className="">
        {<p className="">{weather.current.temperature}</p>}
        <p className="">in {weather?.location}</p>
      </div>
      {weather?.current && (
        <p className="">
          {weather.current.weatherText} | {weather.forecast.weatherText}
        </p>
      )}
    </div>
  );
};

export default Weather;

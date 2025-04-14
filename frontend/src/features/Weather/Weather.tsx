import Forecast from './modules/Forecast';

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
        className="weatherIcon"
      />
      <div className="">
        {<p className="">{weather.current.temperature}ºF</p>}
        <p className="">in {weather?.location}</p>
        <p className="">Feels like {weather.current.realFeel}ºF</p>
        <p className="">Humidity: {weather.current.relativeHumidity}%</p>
        <p className="">
          Wind: {weather.current.wind.Speed.Imperial.Value} mph{' '}
          {weather.current.wind.Direction.Degrees}º
          {weather.current.wind.Direction.Localized}
        </p>
        <p className="">UV Index: {weather.current.uVIndex}</p>
        <p className="">UV Index Text: {weather.current.uVIndexText}</p>
      </div>
      {weather?.current && (
        <p className="">
          {weather.current.weatherText} | {weather.forecast.weatherText}
        </p>
      )}
      <div className="weatherForecast">
        {weather.forecast.forecastData.map((forecast) => (
          <Forecast {...forecast} key={forecast.date} />
        ))}
      </div>
    </div>
  );
};

export default Weather;

import Forecast from './modules/Forecast';

import { useFetchWeather } from '../../hooks/useFetchWeather';

import { getWeatherIcon } from '../../utils/WeatherUtils';

import styles from './styles/Weather.module.scss';

const Weather = () => {
  const { weather, error, isError, isLoading } = useFetchWeather();

  if (isLoading)
    return <div className={styles.weatherContainer}>Loading weather</div>;

  if (isError)
    return (
      <div className={styles.weatherContainer}>
        {error ? error.message : ''}
      </div>
    );

  if (!weather)
    return (
      <div className={styles.weatherContainer}>No weather data available</div>
    );

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.currentContainer}>
        <img
          src={getWeatherIcon(weather.current.weatherIcon)}
          alt={weather.current.weatherText}
          className={styles.weatherIcon}
        />

        <div className={styles.currentText}>
          <p className={styles.currentTemperature}>
            {weather.current.temperature}ºF
          </p>
          <p className={styles.currentLocation}>in {weather?.location}</p>
        </div>
        {/* <p className={styles.currentWeather}>Feels like {weather.current.realFeel}ºF</p>
        <p className={styles.currentWeather}>Humidity: {weather.current.relativeHumidity}%</p>
        <p className={styles.currentWeather}>
          Wind: {weather.current.wind.speed} mph {weather.current.wind.degrees}º{' '}
          {weather.current.wind.direction}
        </p> */}
        {/* <p className={styles.currentWeather}>
          UV Index: {weather.current.uVIndex}
        </p>
        <p className={styles.currentWeather}>
          UV Index Text: {weather.current.uVIndexText}
        </p> */}
      </div>
      {weather?.current && (
        <p className={styles.description}>
          {weather.current.weatherText} | {weather.forecast.weatherText}
        </p>
      )}
      <div className={styles.forecastContainer}>
        <p className={styles.forecastTitle}>Forecast</p>
        <div className={styles.forecastSubContainer}>
          {weather.forecast.forecastData.map((forecast) => (
            <Forecast {...forecast} key={forecast.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;

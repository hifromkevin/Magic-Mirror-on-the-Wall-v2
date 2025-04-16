// import getWeatherIcon from '../../utils/WeatherUtils';
import { IWeatherForecastData } from '../../../types/WeatherTypes';
import { getWeatherIcon } from '../../../utils/WeatherUtils';

import styles from '../styles/Weather.module.scss';

const Forecast = ({
  date,
  iconDay,
  iconDayPhrase,
  iconNight,
  iconNightPhrase,
  temperatureHigh,
  temperatureLow,
}: IWeatherForecastData) => {
  return (
    <div className={styles.forecast}>
      <p className={styles.forecastDate}>{date}</p>
      <div>
        <img
          src={getWeatherIcon(iconDay)}
          alt={iconDayPhrase}
          className={styles.icon}
        />
        <img
          src={getWeatherIcon(iconNight)}
          alt={iconNightPhrase}
          className={styles.icon}
        />
      </div>
      <p className={styles.singleForecast__temperature}>
        <span>{temperatureHigh}ºF</span> / <span>{temperatureLow}ºF</span>
      </p>
    </div>
  );
};

export default Forecast;

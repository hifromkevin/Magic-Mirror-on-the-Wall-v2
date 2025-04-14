// import getWeatherIcon from '../../utils/WeatherUtils';
import { IWeatherForecastData } from '../../../types/WeatherTypes';
import { getWeatherIcon } from '../../../utils/WeatherUtils';

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
    <div className="forecast">
      <p className="forecastDate">{date}</p>
      <img
        src={getWeatherIcon(iconDay)}
        alt={iconDayPhrase}
        className="singleForecast__icon"
      />
      <img
        src={getWeatherIcon(iconNight)}
        alt={iconNightPhrase}
        className="singleForecast__icon"
      />
      <p className="singleForecast__temperature">
        <span className="singleForecast__high">{temperatureHigh}</span> /{' '}
        <span className="singleForecast__low">{temperatureLow}</span>
      </p>
    </div>
  );
};

export default Forecast;

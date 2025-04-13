// import getWeatherIcon from '../../utils/WeatherUtils';
import { useFetchWeather } from '../../hooks/useFetchWeather';

const Weather = () => {
  const { weather, error, isError, isLoading } = useFetchWeather();

  if (isLoading) {
    return <div className="weatherContainer">Loading weather</div>;
  }
  if (isError) {
    return (
      <div className="weatherContainer">
        <p>{error ? error.message : ''}</p>
      </div>
    );
  }

  if (!weather) {
    return <div className="weatherContainer">No weather data available</div>;
  }

  {
    console.log('himom!');
  }
  return (
    <div className="weatherContainer">
      <h1>Weather</h1>
      {/* <img
              src={weatherIcons[weatherTranslator(current.WeatherIcon)]}
              alt={current.description}
              className="weather__today__icon"
            /> */}
      <div className="">
        {weather?.current && 'Temperature' in weather.current && (
          <p className="">{weather.current.Temperature.Imperial.Value}</p>
        )}
        <p className="">in {weather?.location}</p>
      </div>
      {weather?.current && 'WeatherText' in weather.current && (
        <p className="">{weather?.current?.WeatherText}</p>
      )}
    </div>
  );
};

export default Weather;

import { WeatherIconKey, IWeatherIcons } from '../types/WeatherIconTypes';

import {
  Clear,
  PartlyCloudy,
  Rain,
  Cloudy,
  Snow,
  Thunderstorms,
  Wind,
  Fog,
  ClearNight,
  CloudyNight,
} from '../assets/weatherIcons';

const weatherTranslator = (weatherCode: number): WeatherIconKey => {
  let icon: WeatherIconKey;

  //reference: https://developer.accuweather.com/weather-icons
  switch (weatherCode) {
    case 1:
    case 2:
    case 30:
    case 31:
      icon = 'clear';
      break;
    case 33:
    case 34:
      icon = 'clearNight';
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      icon = 'partlyCloudy';
      break;
    case 35:
    case 36:
      icon = 'cloudyNight';
      break;
    case 7:
    case 8:
    case 20:
    case 21:
    case 38:
      icon = 'cloudy';
      break;
    case 11:
    case 37:
      icon = 'fog';
      break;
    case 12:
    case 13:
    case 14:
    case 18:
    case 19:
    case 39:
    case 40:
      icon = 'rain';
      break;
    case 15:
    case 16:
    case 17:
    case 41:
    case 42:
      icon = 'thunderstorms';
      break;
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 29:
    case 43:
    case 44:
      icon = 'snow';
      break;
    case 32:
      icon = 'wind';
      break;
    default:
      icon = 'clear';
      break;
  }

  return icon;
};

const weatherIcons: IWeatherIcons = {
  clear: Clear,
  partlyCloudy: PartlyCloudy,
  rain: Rain,
  cloudy: Cloudy,
  snow: Snow,
  thunderstorms: Thunderstorms,
  wind: Wind,
  fog: Fog,
  sunrise: Clear,
  clearNight: ClearNight,
  cloudyNight: CloudyNight,
  sleet: Rain,
  hail: Rain,
};

export const getWeatherIcon = (weatherCode: number): string =>
  weatherIcons[weatherTranslator(weatherCode)];

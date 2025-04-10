export interface IWeatherIcons {
  clear: string;
  partlyCloudy: string;
  rain: string;
  cloudy: string;
  snow: string;
  thunderstorms: string;
  wind: string;
  fog: string;
  sunrise: string;
  clearNight: string;
  cloudyNight: string;
  sleet: string;
  hail: string;
}

export type WeatherIconKey = keyof IWeatherIcons;

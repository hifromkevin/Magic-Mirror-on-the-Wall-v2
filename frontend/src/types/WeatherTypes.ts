// Root Weather Response
export interface IWeatherResponse {
  current: IWeatherCurrent;
  forecast: IWeatherForecast;
  location?: string;
}

export interface IWeatherError {
  code: string;
  message: string;
  reference: string;
}

export interface IWeatherInternalError {
  code?: string;
  message: string;
  status?: number;
  [key: string]: any;
}

// Current Weather
export interface IWeatherCurrent {
  isDayTime: boolean;
  realFeel: number;
  realFeelShade: number;
  relativeHumidity: number;
  temperature: number;
  uVIndex: number;
  uVIndexText: string;
  visibility: IMeasurements;
  weatherIcon: number;
  weatherText: string;
  wind: IWind;
}

// Forecast Weather
export interface IWeatherForecast {
  weatherText: string;
  forecastData: IWeatherForecastData[];
}

export interface IWeatherForecastData {
  date: string;
  temperatureHigh: number;
  temperatureLow: number;
  iconDay: number;
  iconDayPhrase: string;
  iconNight: number;
  iconNightPhrase: string;
}

// Shared Types
interface IMeasurements {
  Metric: IMeasurementUnits;
  Imperial: IMeasurementUnits;
}

interface IMeasurementUnits {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface IWind {
  degrees: number;
  direction: string;
  speed: number;
}

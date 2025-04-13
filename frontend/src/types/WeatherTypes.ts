// Root Weather Response
export type TWeatherResponse =
  | {
      current: IWeatherCurrent;
      forecast: IWeatherForecast[];
      location?: string;
    }
  | {
      current: IWeatherError;
      forecast: IWeatherError;
      location?: string;
    }
  | {
      current: IWeatherError;
      forecast: IWeatherForecast[];
      location?: string;
    }
  | {
      current: IWeatherCurrent;
      forecast: IWeatherError;
      location?: string;
    }
  | null;

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

//  export interface IWeatherInternalError {
// message: 'Request failed with status code 404',
// name: 'AxiosError',
// code: 'ERR_BAD_REQUEST',
// config: {…},
// request: XMLHttpRequest, …}

// Current Weather
interface IWeatherCurrent {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: string | null;
  IsDayTime: boolean;
  Temperature: ITemperature;
  RealFeelTemperature: IRealFeelTemperature;
  RealFeelTemperatureShade: IRealFeelTemperature;
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  DewPoint: IMeasurement;
  Wind: IWind;
  WindGust: IWindGust;
  UVIndex: number;
  UVIndexText: string;
  Visibility: IMeasurement;
  ObstructionsToVisibility: string;
  CloudCover: number;
  Ceiling: IMeasurement;
  Pressure: IMeasurement;
  PressureTendency: IPressureTendency;
  Past24HourTemperatureDeparture: IMeasurement;
  ApparentTemperature: IMeasurement;
  WindChillTemperature: IMeasurement;
  WetBulbTemperature: IMeasurement;
  WetBulbGlobeTemperature: IMeasurement;
  Precip1hr: IMeasurement;
  PrecipitationSummary: IPrecipitationSummary;
  TemperatureSummary: ITemperatureSummary;
  MobileLink: string;
  Link: string;
}

// Forecast Weather
interface IWeatherForecast {
  Date: string;
  EpochDate: number;
  Temperature: ITemperatureRange;
  Day: IForecastDetails;
  Night: IForecastDetails;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

// Shared Types
interface ITemperature {
  Metric: IMeasurement;
  Imperial: IMeasurement;
}

interface IRealFeelTemperature {
  Metric: IRealFeelMeasurement;
  Imperial: IRealFeelMeasurement;
}

interface IRealFeelMeasurement {
  Value: number;
  Unit: string;
  UnitType: number;
  Phrase: string;
}

interface IMeasurement {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface IWind {
  Direction: IWindDirection;
  Speed: ITemperature;
}

interface IWindDirection {
  Degrees: number;
  Localized: string;
  English: string;
}

interface IWindGust {
  Speed: ITemperature;
}

interface IPressureTendency {
  LocalizedText: string;
  Code: string;
}

interface IPrecipitationSummary {
  Precipitation: ITemperature;
  PastHour: ITemperature;
  Past3Hours: ITemperature;
  Past6Hours: ITemperature;
  Past9Hours: ITemperature;
  Past12Hours: ITemperature;
  Past18Hours: ITemperature;
  Past24Hours: ITemperature;
}

interface ITemperatureSummary {
  Past6HourRange: ITemperatureRange;
  Past12HourRange: ITemperatureRange;
  Past24HourRange: ITemperatureRange;
}

interface ITemperatureRange {
  Minimum: ITemperature;
  Maximum: ITemperature;
}

interface IForecastDetails {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

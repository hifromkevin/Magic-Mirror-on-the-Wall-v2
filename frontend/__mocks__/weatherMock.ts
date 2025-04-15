import { IWeatherResponse } from '../src/types/WeatherTypes';

export const weatherMock: IWeatherResponse = {
  current: {
    isDayTime: true,
    realFeel: 75,
    realFeelShade: 75,
    relativeHumidity: 75,
    temperature: 213,
    uVIndex: 75,
    uVIndexText: 'This is UV index',
    visibility: {
      Metric: {
        Value: 100,
        Unit: 'units',
        UnitType: 50,
      },
      Imperial: {
        Value: 100,
        Unit: 'units',
        UnitType: 50,
      },
    },
    weatherIcon: 1,
    weatherText: 'This is weather text',
    wind: {
      Direction: {
        Degrees: 45,
        Localized: 'Localized',
        English: 'English',
      },
      Speed: {
        Metric: {
          Value: 100,
          Unit: 'units',
          UnitType: 50,
        },
        Imperial: {
          Value: 100,
          Unit: 'units',
          UnitType: 50,
        },
      },
    },
    windGust: {
      Speed: {
        Metric: {
          Value: 100,
          Unit: 'units',
          UnitType: 50,
        },
        Imperial: {
          Value: 100,
          Unit: 'units',
          UnitType: 50,
        },
      },
    },
  },
  forecast: {
    weatherText: 'This is forecast text',
    forecastData: [
      {
        date: 'Friday, Dec 31',
        temperatureHigh: 50,
        temperatureLow: 25,
        iconDay: 1,
        iconDayPhrase: 'Day time 1',
        iconNight: 33,
        iconNightPhrase: 'Night time 1',
      },
      {
        date: 'Saturday, Jan 1',
        temperatureHigh: 100,
        temperatureLow: 75,
        iconDay: 1,
        iconDayPhrase: 'Day time 2',
        iconNight: 33,
        iconNightPhrase: 'Night time 2',
      },
    ],
  },
  location: 'Fake City, XYZ',
};

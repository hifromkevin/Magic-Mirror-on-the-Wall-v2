import { getWeatherIcon } from '../WeatherUtils';
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
} from '../../assets/weatherIcons';

describe('WeatherUtils', () => {
  describe('getWeatherIcon', () => {
    it('should return the correct icon for clear weather', () => {
      expect(getWeatherIcon(1)).toBe(Clear);
      expect(getWeatherIcon(2)).toBe(Clear);
      expect(getWeatherIcon(30)).toBe(Clear);
      expect(getWeatherIcon(31)).toBe(Clear);
    });

    it('should return the correct icon for clear night weather', () => {
      expect(getWeatherIcon(33)).toBe(ClearNight);
      expect(getWeatherIcon(34)).toBe(ClearNight);
    });

    it('should return the correct icon for partly cloudy weather', () => {
      expect(getWeatherIcon(3)).toBe(PartlyCloudy);
      expect(getWeatherIcon(4)).toBe(PartlyCloudy);
    });

    it('should return the correct icon for cloudy weather', () => {
      expect(getWeatherIcon(7)).toBe(Cloudy);
      expect(getWeatherIcon(8)).toBe(Cloudy);
    });

    it('should return the correct icon for fog', () => {
      expect(getWeatherIcon(11)).toBe(Fog);
    });

    it('should return the correct icon for rain', () => {
      expect(getWeatherIcon(12)).toBe(Rain);
      expect(getWeatherIcon(13)).toBe(Rain);
    });

    it('should return the correct icon for snow', () => {
      expect(getWeatherIcon(22)).toBe(Snow);
      expect(getWeatherIcon(23)).toBe(Snow);
    });

    it('should return the correct icon for thunderstorms', () => {
      expect(getWeatherIcon(15)).toBe(Thunderstorms);
      expect(getWeatherIcon(16)).toBe(Thunderstorms);
    });

    it('should return the correct icon for wind', () => {
      expect(getWeatherIcon(32)).toBe(Wind);
    });

    it('should return the correct icon for cloudy night', () => {
      expect(getWeatherIcon(36)).toBe(CloudyNight);
    });

    it('should return the default icon for unknown weather codes', () => {
      expect(getWeatherIcon(999)).toBe(Clear);
    });
  });
});

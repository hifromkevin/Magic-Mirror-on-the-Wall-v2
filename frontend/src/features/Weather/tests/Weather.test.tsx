import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../../../utils/TestUtils';

import Weather from '../Weather';

import { weatherMock } from '../../../../__mocks__/weatherMock';
import * as useFetchWeatherHook from '../../../hooks/useFetchWeather';

jest.mock('../../../hooks/useFetchWeather');
const mockUseFetchWeather = useFetchWeatherHook.useFetchWeather as jest.Mock;

describe('Weather Component', () => {
  it('renders loading state', () => {
    mockUseFetchWeather.mockReturnValue({
      weather: {},
      error: null,
      isError: false,
      isLoading: true,
    });

    renderWithQueryClient(<Weather />);
    expect(screen.getByText('Loading weather')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseFetchWeather.mockReturnValue({
      weather: {},
      error: {
        message: 'Request failed',
      },
      isError: true,
      isLoading: false,
    });

    renderWithQueryClient(<Weather />);
    expect(screen.getByText('Request failed')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseFetchWeather.mockReturnValue({
      weather: {},
      error: {
        message: 'Request failed',
      },
      isError: true,
      isLoading: false,
    });

    renderWithQueryClient(<Weather />);
    expect(screen.getByText('Request failed')).toBeInTheDocument();
  });

  it('renders current weather', () => {
    mockUseFetchWeather.mockReturnValue({
      weather: weatherMock,
      error: null,
      isError: false,
      isLoading: false,
    });

    renderWithQueryClient(<Weather />);
    expect(screen.getByText('213ºF')).toBeInTheDocument();
    // expect(screen.getByText('Feels like 75ºF')).toBeInTheDocument();
    // expect(screen.getByText('Humidity: 75%')).toBeInTheDocument();
    // expect(screen.getByText('in Fake City, XYZ')).toBeInTheDocument();
    // expect(screen.getByText('Wind: 100 mph 45º English')).toBeInTheDocument();
    expect(
      screen.getByText('This is weather text | This is forecast text')
    ).toBeInTheDocument();
  });

  it('renders forecast successfully', () => {
    mockUseFetchWeather.mockReturnValue({
      weather: weatherMock,
      error: {
        message: 'Request failed',
      },
      isError: true,
      isLoading: false,
    });

    // renderWithQueryClient(<Forecast {...weatherMock.forecast} />);
    // expect(screen.getByText('Friday, Dec 31')).toBeInTheDocument();
    // expect(screen.getByText('Saturday, Jan 1')).toBeInTheDocument();
  });
});

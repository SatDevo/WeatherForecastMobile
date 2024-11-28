import React from 'react';
import renderer from 'react-test-renderer';
import { TimelinesScreenScene } from '../TimelinesScreen.scene';
import { ProcessedWeatherData } from '../types';

// Mock the required components
jest.mock('../../../../components/atoms/IconButton', () => ({
  IconButton: 'IconButton',
}));
jest.mock('../../../../components/molecules/LocationDisplay', () => ({
  LocationDisplay: 'LocationDisplay',
}));
jest.mock('../../../../components/molecules/TemperatureDisplay', () => ({
  TemperatureDisplay: 'TemperatureDisplay',
}));
jest.mock('../../../../components/molecules/WeatherMetric', () => ({
  WeatherMetric: 'WeatherMetric',
}));
jest.mock('../../../../components/organisms/DailyForecastList', () => ({
  DailyForecastList: 'DailyForecastList',
}));

// Mock react-native-feather icons
jest.mock('react-native-feather', () => ({
  Search: 'Search',
  Wind: 'Wind',
  Droplet: 'Droplet',
  Sun: 'Sun',
}));

// Mock the COLORS constant
jest.mock('../../../../constants/colors', () => ({
  COLORS: {
    white: '#FFFFFF',
  },
}));

describe('TimelinesScreenScene', () => {
  const mockWeatherData: ProcessedWeatherData = {
    city: 'New York',
    country: 'USA',
    current: {
      temperature: 25,
      condition: 'Sunny',
      windSpeed: '10',
      humidity: '60',
      sunrise: '06:00',
    },
    forecast: [
      { time: '12:00', temp: '26°', condition: 'Sunny', windSpeed: '12 km/h' },
      { time: '15:00', temp: '28°', condition: 'Partly Cloudy', windSpeed: '14 km/h' },
    ],
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <TimelinesScreenScene weatherData={mockWeatherData} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays correct location', () => {
    const instance = renderer.create(
      <TimelinesScreenScene weatherData={mockWeatherData} />
    ).root;

    const locationDisplay = instance.findByType('LocationDisplay');
    expect(locationDisplay.props.city).toBe('New York');
    expect(locationDisplay.props.country).toBe('USA');
  });

  it('displays correct current weather information', () => {
    const instance = renderer.create(
      <TimelinesScreenScene weatherData={mockWeatherData} />
    ).root;

    const temperatureDisplay = instance.findByType('TemperatureDisplay');
    expect(temperatureDisplay.props.temperature).toBe('25°');
    expect(temperatureDisplay.props.condition).toBe('Sunny');

    const weatherMetrics = instance.findAllByType('WeatherMetric');
    expect(weatherMetrics[0].props.value).toBe('10 km/h');
    expect(weatherMetrics[1].props.value).toBe('60%');
    expect(weatherMetrics[2].props.value).toBe('06:00');
  });

  it('passes forecast data to DailyForecastList', () => {
    const instance = renderer.create(
      <TimelinesScreenScene weatherData={mockWeatherData} />
    ).root;

    const dailyForecastList = instance.findByType('DailyForecastList');
    expect(dailyForecastList.props.forecasts).toEqual(mockWeatherData.forecast);
  });
});


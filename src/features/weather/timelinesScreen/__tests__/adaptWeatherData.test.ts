import { adaptWeatherData } from '../TimelinesScreen.adapter';
import { WeatherData } from '../types';
import {mockWeatherData} from './__mocks__/mockWeatherData';

describe('adaptWeatherData', () => {
  it('should process weather data correctly', () => {
    const result = adaptWeatherData(mockWeatherData as WeatherData);

    // Test basic structure
    expect(result).toHaveProperty('city', 'Casablanca');
    expect(result).toHaveProperty('country', 'Morocco');
    expect(result).toHaveProperty('current');
    expect(result).toHaveProperty('forecast');

    // Test current weather
    expect(result.current).toEqual({
      temperature: '14', // 56.98°F converted to Celsius
      condition: expect.any(String),
      windSpeed: '3.0',
      humidity: '0.83',
      sunrise: '14:47',
    });

    // Test forecast
    expect(result.forecast).toHaveLength(10); //  hours from 14:47 to 23:47

    // Check if all forecast times are before midnight
    result.forecast.forEach(hour => {
      const time = hour.time.split(':').map(Number);
      expect(time[0]).toBeLessThan(24);
    });

    // Check first and last forecast hour
    expect(result.forecast[0].time).toBe('14:47');
    expect(result.forecast[result.forecast.length - 1].time).toBe('23:47');

    // Test a specific hour in the forecast
    const specificHour = result.forecast.find(h => h.time === '18:47');
    expect(specificHour).toEqual({
      time: '18:47',
      temp: '12°',
      condition: expect.any(String),
      windSpeed: '9.6 km/h',
    });
  });

  it('should throw an error for invalid data structure', () => {
    const invalidData = { data: { timelines: [] } };
    expect(() => adaptWeatherData(invalidData as WeatherData)).toThrow(new Error('Invalid weather data structure'));
  });
});


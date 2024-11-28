import { ProcessedWeatherData, WeatherData } from './types';
import { convertTemperatureToCelsius, getWeatherCondition } from './utils';


export const adaptWeatherData = (data: WeatherData): ProcessedWeatherData => {
  const currentData = data.data.timelines.find(timeline => timeline.timestep === 'current')?.intervals[0];
  const hourlyData = data.data.timelines.find(timeline => timeline.timestep === '1h')?.intervals.slice(0, 24);

  if (!currentData || !hourlyData) {
    throw new Error('Invalid weather data structure');
  }

  const currentTime = currentData.startTime;
  const [currentDate] = currentTime.split('T');

  const endOfDay = `${currentDate}T23:59:59-04:00`;

  const remainingHoursToday = hourlyData.filter(interval =>
    interval.startTime >= currentTime && interval.startTime <= endOfDay
  );

  return {
    city: 'Casablanca',
    country: 'Morocco',
    current: {
      temperature: convertTemperatureToCelsius(currentData.values.temperature),
      condition: getWeatherCondition(currentData.values.weatherCode),
      windSpeed: `${currentData.values.windSpeed.toFixed(1)}`,
      humidity:  `${currentData.values.precipitationIntensity * 100}`,
      sunrise: currentData.startTime.split('T')[1].slice(0, 5),
    },
    forecast: remainingHoursToday.map(interval => ({
      time: interval.startTime.split('T')[1].slice(0, 5),
      temp: `${convertTemperatureToCelsius(interval.values.temperature)}°`,
      condition: getWeatherCondition(interval.values.weatherCode),
      windSpeed: `${interval.values.windSpeed.toFixed(1)} km/h`,
    })),
  };
};



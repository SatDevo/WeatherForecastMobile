import { WeatherData } from '../../../features/weather/timelinesScreen/types';
import { API_BASE_URL } from '../../apiConfig';

const fetchWeatherData = async (): Promise<WeatherData> => {
  const response = await fetch(`${API_BASE_URL}/timelines`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return data;
};

export {
  fetchWeatherData,
};

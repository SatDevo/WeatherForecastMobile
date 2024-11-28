import { useQuery } from 'react-query';
import { fetchWeatherData } from '../../../api/actions/timelines';
import { WeatherData } from '../timelinesScreen/types';

export const useTimelinesData = () => {
  return useQuery<WeatherData, Error>(
    'weatherData', // Query key
    fetchWeatherData, // Fetch function
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      refetchInterval: 1000 * 60 * 15, // Refetch every 15 minutes
      retry: (failureCount, error) => {
        return error instanceof Error && error.message !== 'Network request failed';
      },
    }
  );
};

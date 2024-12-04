import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from '../../../api/actions/timelines';

export const useTimelinesData = () => {
  return useQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeatherData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
    networkMode: 'offlineFirst',
    retry: 3,
  });
};


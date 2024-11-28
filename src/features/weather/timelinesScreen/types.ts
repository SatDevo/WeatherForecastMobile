interface WeatherInterval {
  startTime: string;
  values: {
    precipitationIntensity: number;
    precipitationType: number;
    windSpeed: number;
    windGust: number;
    windDirection: number;
    temperature: number;
    temperatureApparent: number;
    cloudCover: number;
    cloudBase: number | null;
    cloudCeiling: number | null;
    weatherCode: number;
  };
}

export interface WeatherData {
  data: {
    timelines: Array<{
      timestep: string;
      startTime: string;
      endTime: string;
      intervals: WeatherInterval[];
    }>;
  };
}

export interface ProcessedWeatherData {
  city: string;
  country: string;
  current: {
    temperature: string;
    condition: string;
    windSpeed: string;
    humidity: string;
    sunrise: string;
  };
  forecast: Array<{
    time: string;
    temp: string;
    condition: 'sun' | 'moderaterain' | 'heavyrain' | 'partlycloudy' | 'cloud' | 'mist';
    windSpeed: string;
  }>;
}
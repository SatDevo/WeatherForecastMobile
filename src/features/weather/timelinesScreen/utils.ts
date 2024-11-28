export const convertTemperatureToCelsius = (temperature: number) => {
  const concertedTemperature = (temperature - 32) * (5 / 9);
  return concertedTemperature.toFixed(0);
};

export const getWeatherCondition = (weatherCode: number): 'sun' | 'moderaterain' | 'heavyrain' | 'partlycloudy' | 'cloud' | 'mist' => {
  switch (weatherCode) {
    case 1000:
    case 1100:
      return 'sun';
    case 1101:
    case 1102:
      return 'partlycloudy';
    case 2000:
      return 'cloud';
    case 4000:
      return 'moderaterain';
    case 4001:
    case 4200:
      return 'heavyrain';
    default:
      return 'mist';
  }
};

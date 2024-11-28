import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { DailyForecastList } from './DailyForecastList';

const mockForecasts = [
  { time: '12:00 PM', temp: '25°', condition: 'sun' as const, windSpeed: '5 km/h' },
  { time: '3:00 PM', temp: '27°', condition: 'partlycloudy' as const, windSpeed: '7 km/h' },
  { time: '6:00 PM', temp: '23°', condition: 'cloud' as const, windSpeed: '6 km/h' },
  { time: '9:00 PM', temp: '20°', condition: 'moderaterain' as const, windSpeed: '8 km/h' },
];

storiesOf('Organisms/DailyForecastList', module)
  .add('Default', () => (
    <DailyForecastList
      forecasts={mockForecasts}
    />
  ));


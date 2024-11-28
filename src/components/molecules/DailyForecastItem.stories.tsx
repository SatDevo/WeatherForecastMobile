import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { DailyForecastItem } from './DailyForecastItem';

storiesOf('Molecules/DailyForecastItem', module)
  .add('Sunny Day', () => (
    <DailyForecastItem 
      time="12:00 PM" 
      temp="25°" 
      condition="sun" 
      windSpeed="5 km/h" 
    />
  ))
  .add('Rainy Day', () => (
    <DailyForecastItem 
      time="3:00 PM" 
      temp="18°" 
      condition="moderaterain" 
      windSpeed="10 km/h" 
    />
  ));


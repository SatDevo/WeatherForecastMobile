import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { WeatherMetric } from './WeatherMetric';
import { Wind } from 'react-native-feather';

storiesOf('Molecules/WeatherMetric', module)
  .add('Wind', () => (
    <WeatherMetric 
      icon={<Wind stroke="white" width={20} height={20} />} 
      value="5 km/h" 
    />
  ));


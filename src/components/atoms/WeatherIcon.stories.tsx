import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { WeatherIcon } from './WeatherIcon';

storiesOf('Atoms/WeatherIcon', module)
  .add('Sun', () => <WeatherIcon condition="sun" size={50} />)
  .add('Cloud', () => <WeatherIcon condition="cloud" size={50} />)
  .add('Rain', () => <WeatherIcon condition="moderaterain" size={50} />);


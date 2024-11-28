import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { WeatherText } from './WeatherText';

storiesOf('Atoms/WeatherText', module)
  .add('Default', () => <WeatherText>Hello World</WeatherText>)
  .add('Large', () => <WeatherText style={{ fontSize: 24 }}>Large Text</WeatherText>);


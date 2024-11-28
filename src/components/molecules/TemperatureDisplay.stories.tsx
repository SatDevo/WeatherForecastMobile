import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TemperatureDisplay } from './TemperatureDisplay';

storiesOf('Molecules/TemperatureDisplay', module)
  .add('Sunny', () => (
    <TemperatureDisplay temperature="25°" condition="Sunny" iconCondition="sun" />
  ))
  .add('Rainy', () => (
    <TemperatureDisplay temperature="15°" condition="Rainy" iconCondition="moderaterain" />
  ));


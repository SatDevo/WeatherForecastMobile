import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LocationDisplay } from './LocationDisplay';

storiesOf('Molecules/LocationDisplay', module)
  .add('Default', () => <LocationDisplay city="New York" country="USA" />);


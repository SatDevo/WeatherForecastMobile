import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { IconButton } from './IconButton';
import { Search } from 'react-native-feather';

storiesOf('Atoms/IconButton', module)
  .add('Default', () => (
    <IconButton onPress={action('button-press')}>
      <Search stroke="white" width={24} height={24} />
    </IconButton>
  ));


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TimelinesScreenView} from '../features/weather/timelinesScreen/TimelinesScreen.view';
import { SCREEN_ALIASES } from '../constants/screenAliases';
import { TimelinesStackParamList } from './types';

const Stack = createNativeStackNavigator<TimelinesStackParamList>();

export const TimelinesNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_ALIASES.TIMELINES_ENTRY} component={TimelinesScreenView} />
    </Stack.Navigator>
  );
};




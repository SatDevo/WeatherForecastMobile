import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_ALIASES } from '../constants/screenAliases';
import { RootStackParamList } from './types';
import { TimelinesNavigator } from './TimelinesNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_ALIASES.TIMELINES} component={TimelinesNavigator} />
    </Stack.Navigator>
  );
};


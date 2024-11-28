

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TimelinesNavigator } from './src/navigation/TimelinesNavigator';
import { QueryClientProvider } from 'react-query';
import {queryClient} from './src/data/queryClient';

import { COLORS } from './src/constants/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (

     <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor={COLORS.transparent}
              translucent={true}
            />
            <NavigationContainer>
              <TimelinesNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;


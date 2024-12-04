

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TimelinesNavigator } from './src/navigation/TimelinesNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import queryClient, { persistOptions } from './src/data/queryClient';
import { COLORS } from './src/constants/colors';


const App: React.FC = () => {
  return (

     <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={persistOptions}
        >
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
          </PersistQueryClientProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;


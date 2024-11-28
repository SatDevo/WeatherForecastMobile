import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WeatherText } from '../atoms/WeatherText';

interface WeatherMetricProps {
  icon: React.ReactNode;
  value: string;
}

export const WeatherMetric: React.FC<WeatherMetricProps> = ({ icon, value }) => {
  return (
    <View style={styles.container}>
      {icon}
      <WeatherText style={styles.value}>{value}</WeatherText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    marginLeft: 8,
    fontSize: 16,
  },
});


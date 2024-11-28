import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WeatherText } from '../atoms/WeatherText';
import { WeatherIcon, WeatherCondition } from '../atoms/WeatherIcon';
import { COLORS } from '../../constants/colors';

interface TemperatureDisplayProps {
  temperature: string;
  condition: string;
  iconCondition: WeatherCondition;
}

export const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({ temperature, condition, iconCondition }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <WeatherIcon condition={iconCondition} size={120} />
      </View>
      <View style={styles.temperatureContainer}>
        <WeatherText style={styles.temperature}>{temperature}</WeatherText>
        <WeatherText style={styles.condition}>{condition}</WeatherText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    height: 120,
    marginBottom: 20,
  },
  temperatureContainer: {
    alignItems: 'center',
  },
  temperature: {
    fontSize: 72,
    fontWeight: '200',
  },
  condition: {
    fontSize: 24,
    color: COLORS.lightGray,
    marginTop: 10,
  },
});


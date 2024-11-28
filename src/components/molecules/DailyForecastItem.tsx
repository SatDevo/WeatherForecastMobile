import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WeatherText } from '../atoms/WeatherText';
import { WeatherIcon, WeatherCondition } from '../atoms/WeatherIcon';
import { Wind } from 'react-native-feather';
import { COLORS } from '../../constants/colors';

interface DailyForecastItemProps {
  time: string;
  temp: string;
  condition: WeatherCondition;
  windSpeed: string;
}

export const DailyForecastItem: React.FC<DailyForecastItemProps> = ({ time, temp, condition, windSpeed }) => {
  return (
    <View style={styles.container}>
      <WeatherText style={styles.timeText}>{time}</WeatherText>
      <WeatherIcon condition={condition} size={40} />
      <WeatherText style={styles.tempText}>{temp}</WeatherText>
      <View style={styles.windSpeed}>
        <Wind stroke={COLORS.white} width={12} height={12} />
        <WeatherText style={styles.windSpeedText}>{windSpeed}</WeatherText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
    width: 100,
  },
  timeText: {
    marginBottom: 10,
    fontSize: 14,
  },
  tempText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  windSpeed: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  windSpeedText: {
    fontSize: 12,
    marginLeft: 4,
  },
});


import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WeatherText } from '../atoms/WeatherText';
import { COLORS } from '../../constants/colors';

interface LocationDisplayProps {
  city: string;
  country: string;
}

export const LocationDisplay: React.FC<LocationDisplayProps> = ({ city, country }) => {
  return (
    <View style={styles.container}>
      <WeatherText style={styles.city}>{city},</WeatherText>
      <WeatherText style={styles.country}> {country}</WeatherText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  city: {
    fontSize: 24,
    fontWeight: '600',
  },
  country: {
    fontSize: 24,
    color: COLORS.lightGray,
  },
});


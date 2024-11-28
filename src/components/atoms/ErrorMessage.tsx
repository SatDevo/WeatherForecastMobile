import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WeatherText } from './WeatherText';
import { COLORS } from '../../constants/colors';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <View style={styles.container}>
    <WeatherText style={styles.text}>{message}</WeatherText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    color: COLORS.textPrimary,
    textAlign: 'center',
    fontSize: 16,
  },
});


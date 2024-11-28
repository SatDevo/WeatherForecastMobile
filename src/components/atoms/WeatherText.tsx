import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../constants/colors';

interface WeatherTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export const WeatherText: React.FC<WeatherTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
  },
});


import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { WeatherText } from '../atoms/WeatherText';
import { DailyForecastItem } from '../molecules/DailyForecastItem';
import { COLORS } from '../../constants/colors';

interface DailyForecastListProps {
  forecasts: Array<{
    time: string;
    temp: string;
    condition: 'sun' | 'moderaterain' | 'heavyrain' | 'partlycloudy' | 'cloud' | 'mist';
    windSpeed: string;
  }>;
}

export const DailyForecastList: React.FC<DailyForecastListProps> = ({ forecasts }) => {
  return (
    <View style={styles.container}>
      <WeatherText style={styles.title}>Daily forecast</WeatherText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        testID="DailyForecastListTestID"
      >
        {forecasts.map((forecast, index) => (
          <TouchableOpacity key={index}>
            <DailyForecastItem {...forecast} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 15,
    color: COLORS.textPrimary,
  },
  scrollView: {
    paddingLeft: 20,
  },
});


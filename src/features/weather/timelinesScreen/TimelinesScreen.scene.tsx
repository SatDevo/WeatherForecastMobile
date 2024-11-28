import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Search, Wind, Droplet, Sun } from 'react-native-feather';
import { IconButton } from '../../../components/atoms/IconButton';
import { LocationDisplay } from '../../../components/molecules/LocationDisplay';
import { TemperatureDisplay } from '../../../components/molecules/TemperatureDisplay';
import { WeatherMetric } from '../../../components/molecules/WeatherMetric';
import { COLORS } from '../../../constants/colors';
import { DailyForecastList } from '../../../components/organisms/DailyForecastList';
import { ProcessedWeatherData } from './types';

interface TimelinesScreenSceneProps {
  weatherData: ProcessedWeatherData;
}

export const TimelinesScreenScene: React.FC<TimelinesScreenSceneProps> = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton onPress={() => {}}>
          <Search stroke={COLORS.white} width={24} height={24} />
        </IconButton>
      </View>

      <LocationDisplay city={weatherData.city} country={weatherData.country} />

      <TemperatureDisplay
        temperature={`${weatherData.current.temperature}°`}
        condition={weatherData.current.condition}
        iconCondition="sun"
      />

      <View style={styles.metricsContainer}>
        <WeatherMetric
          icon={<Wind stroke={COLORS.white} width={20} height={20} />}
          value={`${weatherData.current.windSpeed} km/h`}
        />
        <WeatherMetric
          icon={<Droplet stroke={COLORS.white} width={20} height={20} />}
          value={`${weatherData.current.humidity}%`}
        />
        <WeatherMetric
          icon={<Sun stroke={COLORS.white} width={20} height={20} />}
          value={weatherData.current.sunrise}
        />
      </View>

      <DailyForecastList forecasts={weatherData.forecast}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    paddingBottom: 60,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  forecastContainer: {
    marginTop: 40,
  },
  forecastTitle: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 15,
    color: COLORS.white,
  },
  forecastScroll: {
    paddingLeft: 20,
  },
});


import React from 'react';
import { View, StyleSheet, StatusBar, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useTimelinesData } from '../hooks/useTimelinesData';
import { TimelinesScreenScene } from './TimelinesScreen.scene';
import { adaptWeatherData } from './TimelinesScreen.adapter';
import { COLORS } from '../../../constants/colors';
import { WeatherText } from '../../../components/atoms/WeatherText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TimelinesStackParamList } from '../../../navigation/types';
import { SCREEN_ALIASES } from '../../../constants/screenAliases';
import { Loader } from '../../../components/atoms/Loader';

type Props = NativeStackScreenProps<TimelinesStackParamList, typeof SCREEN_ALIASES.TIMELINES_ENTRY>;

export const TimelinesScreenView: React.FC<Props> = () => {
  const { data, isFetching, isError, error, refetch } = useTimelinesData();

  const renderContent = () => {
    if (isFetching || !data) {
      return <Loader />;
    } else if (isError && error && !(error instanceof Error && error.message === 'Network request failed')) {
      return <WeatherText>Error fetching weather data. Pull down to try again.</WeatherText>;
    } else {
      const weatherData = adaptWeatherData(data);
      return <TimelinesScreenScene weatherData={weatherData} />;
    }
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>
        <LinearGradient
          colors={[COLORS.gradientStart, COLORS.gradientEnd]}
          style={[
            styles.gradient,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={refetch}
                tintColor={COLORS.transparent}
                title="Loading ... ( Pull down to refresh )"
                titleColor={COLORS.white}
                progressViewOffset={20}
                progressBackgroundColor={COLORS.transparent}
                colors={[COLORS.transparent]}
              />
            }
          >
            {renderContent()}
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});


import React from 'react';
import FastImage from 'react-native-fast-image';

export type WeatherCondition = 'sun' | 'moderaterain' | 'heavyrain' | 'partlycloudy' | 'cloud' | 'mist';

const weatherImages: Record<WeatherCondition, any> = {
  sun: require('../../../assets/images/sun.png'),
  moderaterain: require('../../../assets/images/moderaterain.png'),
  heavyrain: require('../../../assets/images/heavyrain.png'),
  partlycloudy: require('../../../assets/images/partlycloudy.png'),
  cloud: require('../../../assets/images/cloud.png'),
  mist: require('../../../assets/images/mist.png'),
};

interface WeatherIconProps {
  condition: WeatherCondition;
  size: number;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size }) => {
  return (
    <FastImage
      source={weatherImages[condition]}
      style={{ width: size, height: size }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};


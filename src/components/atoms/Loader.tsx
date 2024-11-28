import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';

interface LoaderProps {
  size?: 'small' | 'large';
}

export const Loader: React.FC<LoaderProps> = ({ size = 'large' }) => (
  <View style={styles.container}>
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size={size} color={COLORS.white} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
  },
  loaderWrapper: {
    padding: 20,
    borderRadius: 10,
  },
});

export default Loader;


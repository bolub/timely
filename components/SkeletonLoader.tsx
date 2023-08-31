import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ColorChangingSkeletonProps {
  width: number;
  height: number;
}

const ColorChangingSkeleton: React.FC<ColorChangingSkeletonProps> = ({
  width,
  height,
}) => {
  const colors = ['#E0E0E0', '#F0F0F0', '#E0E0E0'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      colors.push(colors.shift()!); // Rotate the colors array
      forceUpdate(); // Force a component update to trigger re-render
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const forceUpdate = () => {
    // Empty function to trigger component update
  };

  return (
    <View style={[{ width, height }, styles.container]}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export default ColorChangingSkeleton;

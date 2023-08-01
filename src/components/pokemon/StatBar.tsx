import { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, useWindowDimensions, Text } from 'react-native';

interface StatBarI {
    stat: number,
    color: string,
    max: number, 
}

export function StatBar ({ stat, color, max }: StatBarI) {
  const size = useWindowDimensions();
  const windowWidth = size.width;
  // const width = new Animated.Value(0);
  const width = useRef(new Animated.Value(0)).current;

  //40 is subtracted from the 90% of the windowWidth, because each detailedCard width is 90% of the window. And the 40 is because has a 20 padding in both sides.
  // 300 and 1000 bug
  const statNormalized = (stat / max) * (windowWidth - 30 - 32 - 32);
  // Animated.spring(
  //   width, {
  //     friction: 7,
  //     toValue: 200,
  //     speed: 12,
  //     bounciness: 8,

  //   }
  // )
  // Animated.loop(
    Animated.timing(width, {
      toValue: statNormalized,
      duration: 200,
      useNativeDriver: false,
      // easing: 
    }).start();
  // ).start();
  

  return (
    <View style={[styles.container, styles.border]}>
      <Animated.View
        style={[styles.bar, styles.border, {
            width,
            backgroundColor: color
        }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        height: 16,  
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    bar: {
        height: '100%',
        borderRadius: 20,

        alignItems: "center"
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})
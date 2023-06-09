import { useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

// type Colors = 

// interface StatsI {
  
// }

interface StatBarI {
    stat: number,
    color: string,
}

export function StatBar ({ stat, color }: StatBarI) {
  const width = new Animated.Value(0);
  console.log(stat);

  useEffect(() => {
    Animated.timing(width, {
      toValue: stat,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

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
        height: 20, 
        width: '100%', 
        backgroundColor: '#e0e0e0',

        borderRadius: 10
    },
    bar: {
        height: '100%',
        // backgroundColor: '#6200ee',

        borderRadius: 10
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})
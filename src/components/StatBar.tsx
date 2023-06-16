import { useEffect } from 'react';
import { View, Animated, StyleSheet, useWindowDimensions, Text } from 'react-native';

interface StatBarI {
    stat: number,
    color: string,
    max: number, 
}

export function StatBar ({ stat, color, max }: StatBarI) {
  const size = useWindowDimensions();
  const windowWidth = size.width;
  const width = new Animated.Value(0);

  //40 is subtracted from the 90% of the windowWidth, because each detailedCard width is 90% of the window. And the 40 is because has a 20 padding in both sides.
  const statNormalized = (stat / max) * (windowWidth * 0.9 - 40);

  useEffect(() => {
    Animated.timing(width, {
      toValue: statNormalized,
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
        {/* <Text style={[styles.label, styles.border]}>
        {stat} / {max}
      </Text> */}
        {/* </Animated.View> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        height: 20,  
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        // borderBottomLeftRadius: 10,
        // borderBottomEndRadius: 10,

        // flex: 1,
    },
    bar: {
        height: '100%',
        borderRadius: 10,
        // borderBottomRightRadius: 10,

        alignItems: "center"
    },
    label: {
      width: 40,

      position: "absolute",
      right: -30,
      // alignSelf: "flex-end",
      fontSize: 7,
      // fontWeight: "bold",
      color: "#000",
      // alignItems: "center"
    },
    border: {
        // borderColor: "red",
        // borderWidth: 1,
        // borderRadius: 1
    },
})
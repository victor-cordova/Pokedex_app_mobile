import { Image, StyleSheet, View, Text } from 'react-native';

interface PokedexI {
    focused: boolean,
    size: number,
}

export default function Pokedex({focused, size}: PokedexI) {
    return (
      // <View style={[styles.border, {
      //   alignItems: "center",
      //   // alignSelf: "center"
      // }]}>
        <Image 
          style={[styles.icon, {
            width: size, 
            height: size
          }]} 
          source={focused?require("../../../assets/pokeball_focused.png"):require("../../../assets/pokeball.png")}
        />
        
    )
}

const styles = StyleSheet.create({
  icon: {
    // top: -15
  },
  border: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 1
},
})
import { StackScreenProps } from "@react-navigation/stack";
import { PokedexStackParamList } from "../types/navigation";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import Header from "../components/pokemon/Header";
import { useState } from "react";
import { SegmentedButtons } from "../components/pokemon/SegmentedButtons";
import { SECTIONS, SectionHandler } from '../components/pokemon/SectionHandler'
import { AXIS, Spacer } from "../components/Spacer";

type PropsI = StackScreenProps<PokedexStackParamList, "Pokemon">;

// interface SectionHandlerI {
//   selected: SECTIONS,
//   pokemon: Pokemon,
// }

// function SectionHandler({ selected, pokemon }: SectionHandlerI) {
//   switch (selected) {
//       case SECTIONS.ABOUT:
//           return <AboutScreen pokemon={pokemon}/>
//           // break;
  
//       case SECTIONS.MOVES:
//           return <MovesScreen abilities={pokemon.abilities} moves={pokemon.moves}/>
//           // break;
  
//       case SECTIONS.STATS:
//           return <StatsScreen pokemon={pokemon}/>
//           // break;
          
//       default:
//           break;
//   }
// }

export default function Pokemon (navigator: PropsI): JSX.Element {
  const [sectionSelected, setSectionSelected] = useState<SECTIONS>(SECTIONS.ABOUT);
  const sections: SECTIONS[] = [SECTIONS.ABOUT, SECTIONS.MOVES, SECTIONS.STATS];

  const pokemon = navigator.route.params;

  function switchSection(section: SECTIONS) {
      setSectionSelected(section);
  }
  
  return (   
    // <SafeAreaView style={[styles.container, styles.border]}>
    //   <DetailedCard navigator={navigator}/>
    // </SafeAreaView>
    <View style={[styles.container, styles.border]}>
      <Header pokemon={navigator.route.params}/>
      <Spacer size={16} axis={AXIS.Y}/>
      <SegmentedButtons sectionSelected={sectionSelected} sections={sections} switchSection={switchSection}/>
      <Spacer size={16}  axis={AXIS.Y}/>
      <SectionHandler pokemon={navigator.route.params} selected={sectionSelected}/>
      
      {/* <DetailedCard navigator={navigator}/> */}
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // flex: 1,
    // backgroundColor: "green",

    paddingTop: Platform.OS === "android"? 30: 0,
    // paddingBottom: 350,
    // paddingHorizontal: 20
    
    // justifyContent: "center",
  },
  border: {
    // borderColor: "red",
    // borderWidth: 1,
    // borderRadius: 1
  },
})
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { Header } from "./Header";
import { useState } from "react";
import { SegmentedButtons } from "./SegmentedButtons";
import { SECTIONS, SectionHandler } from './SectionHandler'
import { AXIS, Spacer } from "../../components/Spacer";
import { Pokemon } from "../../types/pokemon";

interface PokemonI {
    data: Pokemon,
    isFocused: boolean,
}

export function PokemonComponent ({ data, isFocused }: PokemonI): JSX.Element {
  const [sectionSelected, setSectionSelected] = useState<SECTIONS>(SECTIONS.ABOUT);
  const sections: SECTIONS[] = [SECTIONS.ABOUT, SECTIONS.MOVES, SECTIONS.STATS];

  function switchSection(section: SECTIONS) {
    setSectionSelected(section);
  }

  // const isFavorite = favoriteIds.findIndex(id => data.order === id) > 0;
  
  return (   
    <SafeAreaView style={[styles.container, styles.border]}>
      <Header pokemon={data} isFocused={isFocused}/>
      <Spacer size={16} axis={AXIS.Y}/>
      <SegmentedButtons sectionSelected={sectionSelected} sections={sections} switchSection={switchSection}/>
      <Spacer size={16}  axis={AXIS.Y}/>
      <SectionHandler pokemon={data} selected={sectionSelected}/>
    </SafeAreaView>
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
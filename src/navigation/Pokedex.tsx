import 'react-native-gesture-handler';

import PokemonScreen from '../screens/Pokemon';
import { PokedexStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/Pokedex';

const PokedexN = createStackNavigator<PokedexStackParamList>();

interface IProps {
  focused: boolean
}

export default function Pokedex(): JSX.Element {
  return (
    <PokedexN.Navigator screenOptions={() => ({
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerTitleAlign: "center",
      headerShown: false
    })}
    >
      <PokedexN.Screen name="Pokedex" component={PokedexScreen}/>
      <PokedexN.Screen name="Pokemon" component={PokemonScreen}/>
    </PokedexN.Navigator>
  );
}
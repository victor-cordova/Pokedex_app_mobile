import 'react-native-gesture-handler';

import { PokemonScreen } from '../screens/PokemonScreen';
import { PokedexStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { PokedexScreen } from '../screens/PokedexScreen';

const PokedexN = createStackNavigator<PokedexStackParamList>();

interface IProps {
  focused: boolean
}

export function PokedexNavigation(): JSX.Element {
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
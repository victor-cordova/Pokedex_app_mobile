import 'react-native-gesture-handler';

import { PokemonScreen } from '../screens/PokemonScreen';
import { PokemonsStackParamList } from '../types/navigation';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { PokedexScreen } from '../screens/PokedexScreen';
// import { useFavoritePokemons } from '../hooks/useFavoriteIds';

const PokedexN = createStackNavigator<PokemonsStackParamList>();
// Create a client

export function PokedexNavigation({}
  // : StackScreenProps<PokedexStackParamList>
  ): JSX.Element {

  return (
    <PokedexN.Navigator screenOptions={() => ({
      headerShown: false
    })}
    >
      <PokedexN.Screen name='Pokemons' component={PokedexScreen}/>
      <PokedexN.Screen name='Pokemon' component={PokemonScreen}/>
    </PokedexN.Navigator>
  );
}
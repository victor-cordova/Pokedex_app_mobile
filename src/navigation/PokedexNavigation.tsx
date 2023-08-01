import 'react-native-gesture-handler';

import { PokemonScreen } from '../screens/PokemonScreen';
import { PokedexStackParamList } from '../types/navigation';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { PokedexScreen } from '../screens/PokedexScreen';
import { useFavoritePokemons } from '../hooks/useFavoritePokemons';

const PokedexN = createStackNavigator<PokedexStackParamList>();
// Create a client

export function PokedexNavigation({}
  // : StackScreenProps<PokedexStackParamList>
  ): JSX.Element {

  const { 
    favoriteIds,
    addId,
    deleteId,
    findId
  } = useFavoritePokemons();
  // const Component = await <PokedexScreen/>;

  return (
    <PokedexN.Navigator screenOptions={() => ({
      headerShown: false
    })}
    >
      <PokedexN.Screen name='Pokedex' component={PokedexScreen}/>
      <PokedexN.Screen name='Pokemon' component={PokemonScreen}/>
    </PokedexN.Navigator>
  );
}
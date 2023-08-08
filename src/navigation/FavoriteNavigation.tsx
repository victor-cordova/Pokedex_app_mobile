import 'react-native-gesture-handler';

import { PokemonsStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const FavoriteN = createStackNavigator<PokemonsStackParamList>();

export function FavoriteNavigation(): JSX.Element {
  return (
    <FavoriteN.Navigator screenOptions={() => ({
      headerShown: false
    })}
    >
      <FavoriteN.Screen name="Pokemons" component={FavoriteScreen}/>
      <FavoriteN.Screen name="Pokemon" component={PokemonScreen}/>
    </FavoriteN.Navigator>
  );
}
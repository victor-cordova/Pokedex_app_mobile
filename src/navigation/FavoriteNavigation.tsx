import 'react-native-gesture-handler';

import { FavoriteStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const FavoriteN = createStackNavigator<FavoriteStackParamList>();

export function FavoriteNavigation(): JSX.Element {
  return (
    <FavoriteN.Navigator screenOptions={() => ({
      headerShown: false
    })}
    >
      <FavoriteN.Screen name="Favorite" component={FavoriteScreen}/>
      <FavoriteN.Screen name="Pokemon" component={PokemonScreen}/>
    </FavoriteN.Navigator>
  );
}
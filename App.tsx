import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTab';
import { useFavoritePokemons } from './src/hooks/useFavoritePokemons';

export default function App(): JSX.Element {
  const { 
    favorite,
    addFavorite,
  } = useFavoritePokemons();
  return (
    <NavigationContainer>
      <BottomTabNavigation/>
    </NavigationContainer>
  );
}
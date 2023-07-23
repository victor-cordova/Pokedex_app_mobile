import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import PokedexIcon from './Pokedex';
import Ionicons from 'react-native-vector-icons/Ionicons'

interface NavigationIconsI {
    focused: boolean, 
    color: string, 
    size: number, 
    route: RouteProp<RootStackParamList, keyof RootStackParamList>
}

export default function Navigation ({color, focused, route, size}: NavigationIconsI): JSX.Element {
    let iconName = "";
  
      if (route.name === 'PokedexNavigation') {
        return <PokedexIcon focused={focused} size={24}/>;
      } else if (route.name === 'Account') {
        iconName = focused
          ? 'person'
          : 'person-outline';
      } else if (route.name === 'FavoriteNavigation') {
        iconName = focused ? 'heart' : 'heart-outline';
      } 
  
      return <Ionicons name={iconName} size={24} color={"black"} />;
  };
  
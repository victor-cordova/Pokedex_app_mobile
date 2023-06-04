import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { PokedexIcon } from './PokedexIcon';
import Ionicons from 'react-native-vector-icons/Ionicons'

interface NavigationIconsI {
    focused: boolean, 
    color: string, 
    size: number, 
    route: RouteProp<RootStackParamList, keyof RootStackParamList>
}

export function NavigationIcons ({color, focused, route, size}: NavigationIconsI): JSX.Element {
    let iconName = "";
  
      if (route.name === 'PokedexNavigation') {
        return <PokedexIcon focused={focused} size={75}/>;
      } else if (route.name === 'Account') {
        iconName = focused
          ? 'person'
          : 'person-outline';
      } else if (route.name === 'Favorite') {
        iconName = focused ? 'star' : 'star-outline';
      } 
  
      return <Ionicons name={iconName} size={25} color={color} />;
  };
  
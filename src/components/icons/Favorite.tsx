import Ionicons from 'react-native-vector-icons/Ionicons';

interface FavoriteI {
    focused: boolean, 
    color: string, 
    size: number, 
    // route: RouteProp<RootStackParamList, keyof RootStackParamList>
}

export function FavoriteIcon ({color, focused, size}: FavoriteI): JSX.Element {
    let iconName = focused ? 'heart' : 'heart-outline';
  
    return <Ionicons name={iconName} size={size} color={color} />;
  };
  
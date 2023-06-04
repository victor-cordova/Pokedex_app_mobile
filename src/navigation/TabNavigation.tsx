import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { AccountScreen } from '../screens/AccountScreen';
import { RootStackParamList } from '../types/navigation';

import { PokedexNavigation } from './PokedexNavigation';
import { NavigationIcons } from '../components/NavigationIcons';

const Tab = createBottomTabNavigator<RootStackParamList>();

export function NavigationTab(): JSX.Element {
  return (
    <Tab.Navigator initialRouteName='PokedexNavigation' screenOptions={({ route }) => ({
      tabBarIcon: ({color, focused, size}) => 
      <NavigationIcons 
        focused={focused} 
        color={color} 
        size={size} 
        route={route}
      />,
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerTitleAlign: "center",
    })}
    >
      <Tab.Screen name="Favorite" component={FavoriteScreen}/>
      <Tab.Screen name="PokedexNavigation" component={PokedexNavigation} options={{tabBarLabel: ""}}/>
      <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
  );
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { AccountScreen }from '../screens/AccountScreen';
import { RootStackParamList } from '../types/navigation';

import { PokedexNavigation } from './PokedexNavigation';
import NavigationIcons from '../components/icons/Navigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

export function BottomTabNavigation(): JSX.Element {
  return (
    <Tab.Navigator 
      initialRouteName='PokedexNavigation'
       
      screenOptions={({ route }) => ({
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
        tabBarLabelStyle: {
          fontSize: 10
        },
        tabBarStyle: {
          height: 80
        },
        headerShown: false
      })}
    >
      <Tab.Screen options={{tabBarLabel: "Favorite"}} name="FavoriteNavigation" component={FavoriteScreen}/>

      <Tab.Screen options={{tabBarLabel: "Pokedex"}} name="PokedexNavigation" component={PokedexNavigation}/>

      <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
  );
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/Favorite';
import AccountScreen from '../screens/Account';
import { RootStackParamList } from '../types/navigation';

import PokedexNavigation from './Pokedex';
import NavigationIcons from '../components/icons/Navigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function BottomTab(): JSX.Element {
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
      tabBarLabelStyle: {
        fontSize: 10
      },
      tabBarStyle: {
        height: 80
      },
      // headerTransparent: true,
      // title: ""
      headerShown: false
    })}
    >
      <Tab.Screen name="Favorite" component={FavoriteScreen}/>
      <Tab.Screen options={{tabBarLabel: "Pokedex"}} name="PokedexNavigation" component={PokedexNavigation}/>
      <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
  );
}
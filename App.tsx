import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTab';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigation/>
    </NavigationContainer>
  );
}
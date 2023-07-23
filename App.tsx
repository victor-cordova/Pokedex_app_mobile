import 'react-native-gesture-handler';

import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { BottomTabNavigation }from './src/navigation/BottomTabNavigation';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigation/>
    </NavigationContainer>
  );
}
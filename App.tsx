import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationTab } from './src/navigation/TabNavigation';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationTab/>
    </NavigationContainer>
  );
}
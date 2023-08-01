import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation }from './src/navigation/BottomTabNavigation';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { useContext } from 'react';
import { DataContext, DataProvider } from './src/contexts/DataContext';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export function useMyQueryContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useMyQueryContext must be used within a QueryClientProvider with a custom context');
  }
  return context;
}

export default function Root() {
  return (
    <QueryClientProvider client={queryClient} >
      <DataProvider>
        <App/>
      </DataProvider>
    </QueryClientProvider>
  )
}

function App(): JSX.Element {
  const {
    data,
    isError,
    isLoading
  } = useContext(DataContext);

  async function hideSplashScreen() {
    await SplashScreen.hideAsync();
  }
  
  if (!isLoading) hideSplashScreen();

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabNavigation/>
    </NavigationContainer>
  );
}
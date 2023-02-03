import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderBar from './src/components/HeaderBar';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import FooterBar from './src/components/FooterBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import loaderStore from './src/store/loaderStore';
import Loader from './src/components/Loader';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const { loaded } = loaderStore; 

  useEffect(() => {
    loaderStore.fulfilled();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } 

  if (loaded) {
    return <Loader></Loader>
  }
  
    return (
        <SafeAreaProvider>
          <HeaderBar />
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <FooterBar />
        </SafeAreaProvider>
    );
  
}

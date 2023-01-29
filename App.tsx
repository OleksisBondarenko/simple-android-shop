import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderBar from './src/components/HeaderBar';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import FooterBar from './src/components/FooterBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
          <HeaderBar />
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <FooterBar />
        </SafeAreaProvider>
    );
  }
}

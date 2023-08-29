import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'nunito-light': Nunito_300Light,
    'nunito-regular': Nunito_400Regular,
    'nunito-semibold': Nunito_600SemiBold,
    'nunito-bold': Nunito_700Bold,
    'nunito-extrabold': Nunito_800ExtraBold,
    'nunito-black': Nunito_900Black,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

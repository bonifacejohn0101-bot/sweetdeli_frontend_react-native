import { Stack } from 'expo-router';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  return <Stack initialRouteName="welcome" screenOptions={{ headerShown: false }} />;
}

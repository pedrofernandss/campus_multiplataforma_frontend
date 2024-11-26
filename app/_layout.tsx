import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Palanquin-Regular": require("../assets/fonts/Palanquin-Regular.ttf"),
    "Palanquin-SemiBold": require("../assets/fonts/Palanquin-SemiBold.ttf"),
    "Palanquin-Bold": require("../assets/fonts/Palanquin-Bold.ttf")
  });


useEffect(() => {
  if (error) throw error;

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded, error]);

if (!fontsLoaded && !error) {
  return null;
}


  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout
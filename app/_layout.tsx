import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { TranslationProvider } from "@/hooks/useTranslation";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // EncodeSansSemiExpanded
    "EncodeSans-Bold": require("../assets/fonts/EncodeSansSemiExpanded-Bold.ttf"),
    "EncodeSans-Light": require("../assets/fonts/EncodeSansSemiExpanded-Light.ttf"),
    "EncodeSans-Medium": require("../assets/fonts/EncodeSansSemiExpanded-Medium.ttf"),
    "EncodeSans-Regular": require("../assets/fonts/EncodeSansSemiExpanded-Regular.ttf"),

    // Lato
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),

    // MontserratAlternates
    "Montserrat-Bold": require("../assets/fonts/MontserratAlternates-Bold.ttf"),
    "Montserrat-Light": require("../assets/fonts/MontserratAlternates-Light.ttf"),
    "Montserrat-Medium": require("../assets/fonts/MontserratAlternates-Medium.ttf"),
    "Montserrat-Regular": require("../assets/fonts/MontserratAlternates-Regular.ttf"),

    // Poppins
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),

    // SpaceMono
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <TranslationProvider> */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      {/* </TranslationProvider> */}
    </ThemeProvider>
  );
}

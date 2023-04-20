import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./screens/AppNavigator";
import SignIn from "./screens/SignIn";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View, Text } from "react-native";

import Styles from "./constants/styles";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Barlow-Black": require("../air-kitchens/assets/fonts/Barlow-Black.ttf"),
    "Barlow-Bold": require("../air-kitchens/assets/fonts/Barlow-Bold.ttf"),
    "Barlow-Regular": require("../air-kitchens/assets/fonts/Barlow-Regular.ttf"),
    "Barlow-Medium": require("../air-kitchens/assets/fonts/Barlow-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  console.log(fontsLoaded);

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="app"
            component={AppNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

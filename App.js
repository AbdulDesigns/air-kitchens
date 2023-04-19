import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./screens/AppNavigator";
import SignIn from "./screens/SignIn";

//navigation Container
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Sign In"
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
    </>
  );
};

export default App;

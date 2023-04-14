import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./screens/AppNavigator";

//navigation Container
const Stack = createNativeStackNavigator();

const App = () => {
  //drawer navigation
  // function DrawerNavigation() {
  //   return (
  //     <Drawer.Navigator
  //       screenOptions={{
  //         headerStyle: {
  //           backgroundColor: Styles.COLORS[500],
  //         },
  //         headerTintColor: "white",
  //         sceneContainerStyle: {
  //           backgroundColor: Styles.COLORS.light,
  //         },
  //         //------------------
  //         //styling the drawer
  //         drawerContentStyle: { backgroundColor: Styles.COLORS[500] },
  //         drawerInactiveTintColor: "white",
  //         drawerActiveTintColor: "white",
  //         drawerActiveBackgroundColor: Styles.COLORS[300],
  //       }}
  //     >
  //       <Drawer.Screen
  //         name="Orders"
  //         component={Orders}
  //         options={{
  //           drawerIcon: ({ color, size }) => (
  //             <Ionicons name="home" color={color} size={size} />
  //           ),
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Order History"
  //         component={OrderHistory}
  //         options={{
  //           drawerIcon: ({ color, size }) => (
  //             <Ionicons name="pizza" size={size} color={color} />
  //           ),
  //         }}
  //       />
  //     </Drawer.Navigator>
  //   );
  // }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

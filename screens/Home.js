import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewOrder from "./NewOrder";
import Preparing from "./Preparing";
import Ready from "./Ready";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const MaterialTab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <MaterialTab.Navigator style={{ paddingTop: 40 }}>
        <MaterialTab.Screen name="new" component={NewOrder} />
        <MaterialTab.Screen name="Preparing" component={Preparing} />
        <MaterialTab.Screen name="ready" component={Ready} />
      </MaterialTab.Navigator>
    </NavigationContainer>
  );
};

export default Home;

import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import MyStore from "./MyStore";
import OrderHistory from "./OrderHistory";
import Profile from "./Profile";
import { Ionicons } from "@expo/vector-icons";
import Styles from "../constants/styles";
import { StatusBar } from "expo-status-bar";
import { color } from "react-native-reanimated";

//creating bottom tab navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Styles.COLORS[500],
        },
        headerTintColor: Styles.COLORS.white,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "900",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistory}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="time-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Store"
        component={MyStore}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="time-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

//styles
const style = StyleSheet.create({});

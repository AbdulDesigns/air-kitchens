import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewOrder from "./NewOrder";
import Preparing from "./Preparing";
import Ready from "./Ready";
import Styles from "../constants/styles";
const MaterialTab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <MaterialTab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: Styles.COLORS[500],
        },

        tabBarStyle: {
          height: 50,
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: Styles.COLORS[50],
        },
        tabBarLabelStyle: {
          fontSize: Styles.FONT_SIZE.xs,
          fontWeight: "700",
        },
      }}
    >
      <MaterialTab.Screen name="new" component={NewOrder} options={{}} />
      <MaterialTab.Screen name="Preparing" component={Preparing} />
      <MaterialTab.Screen name="ready" component={Ready} />
    </MaterialTab.Navigator>
  );
};

export default Home;

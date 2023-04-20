import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/Card";

const NewOrder = () => {
  return (
    <View style={style.mainContainer}>
      <Card />
    </View>
  );
};

export default NewOrder;

//styling
const style = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
});

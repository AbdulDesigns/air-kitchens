import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Styles from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Want to cook something..."
        style={style.inputStyle}
      />
      <View style={style.icon}>
        <Ionicons name="search" size={16} color={"gray"} />
      </View>
    </View>
  );
};

export default Search;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    backgroundColor: Styles.COLORS[50],
    alignItems: "center",
  },

  inputStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    color: Styles.COLORS.black,
  },
  icon: {
    marginRight: 16,
  },
});

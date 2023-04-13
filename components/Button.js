import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import Styles from "../constants/styles";

const Button = ({ label, customStyle }) => {
  return (
    <View>
      <Pressable
        style={[style.btn, customStyle]}
        android_ripple={{ color: Styles.COLORS[500] }}
      >
        <Text style={{ textAlign: "center", color: "white" }}> {label} </Text>
      </Pressable>
    </View>
  );
};

export default Button;

//styling the button
const style = StyleSheet.create({
  btn: {
    padding: 16,
    color: Styles.COLORS.black,
    backgroundColor: Styles.COLORS[400],
    width: 100,
    borderRadius: Styles.RADIUS.small,
  },
});

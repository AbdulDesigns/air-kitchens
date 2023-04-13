import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Styles from "../constants/styles";
import { TouchableOpacity } from "react-native";

const IconTab = ({ quantity, item }) => {
  return (
    <View>
      <View style={style.tabMainContainer}>
        <View style={style.tabLeftContainer}>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../assets/images/type.png")}
              style={style.image}
            />
          </View>
          <Text style={style.text}>{`${quantity} x ${item}`}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons name="caret-down" size={14} color={Styles.COLORS.ba} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IconTab;

//styling the component
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 14,
    height: 14,
  },
  tabMainContainer: {
    flexDirection: "row",
    mibWidth: 288,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  tabLeftContainer: {
    minWidth: 260,
    flexDirection: "row",
    gap: 8,
  },
  text: {
    fontSize: Styles.FONT_SIZE.sm,
    lineHeight: 20,
  },
});

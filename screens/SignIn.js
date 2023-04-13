import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../constants/styles";
import Button from "../components/Button";

const SignIn = () => {
  return (
    <SafeAreaView>
      <View style={style.mainContainer}>
        <View style={style.imageContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={style.image}
          />
          <Text style={style.subHeader}>Sign in to Store Dashboard </Text>
          <View style={style.inputContainer}>
            <TextInput placeholder="Username" style={style.input} />
            <TextInput placeholder="Password" style={style.input} />
          </View>
          <Button />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

//styling
const style = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: Styles.COLORS[500],
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "white",
    width: 370,
    height: 340,
    elevation: 4,
    padding: 24,
    borderRadius: Styles.RADIUS.Medium,
  },
  image: {
    width: 120,
    height: 24,
    marginVertical: 10,
    resizeMode: "contain",
  },
  subHeader: {
    fontSize: Styles.FONT_SIZE.base,
    fontWeight: "800",
    marginBottom: 12,
  },
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    width: 280,
    borderWidth: 1,
    borderColor: Styles.COLORS.black,
    borderRadius: Styles.RADIUS.small,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
});

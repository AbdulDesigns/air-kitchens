import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../constants/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  //handling user input to authnticate
  //not using regex to check the pattern
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  //listener
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("app");
      }
    });
    return unSubscribe;
  }, []);

  //signin functionality
  function signUser() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert("signed in");
      })
      .catch((error) => {
        Alert.alert("invalid credentials");
      });
  }

  return (
    <>
      <View style={style.mainContainer}>
        <View style={style.imageContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={style.image}
          />
          <Text style={style.subHeader}>Sign in to Store Dashboard </Text>
          <View style={style.inputContainer}>
            <TextInput
              keyboardType="default"
              placeholder="Username"
              style={style.input}
              value={email}
              onChangeText={(val) => setEmail(val)}
            />
            <TextInput
              placeholder="Password"
              style={style.input}
              secureTextEntry
              value={password}
              onChangeText={(pass) => setPassword(pass)}
            />
          </View>
          <Pressable
            onPress={signUser}
            style={style.btn}
            android_ripple={{ color: Styles.COLORS[500] }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Barlow-Medium",
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      </View>
    </>
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
    padding: 32,
    borderRadius: Styles.RADIUS.Medium,
  },
  btn: {
    padding: 16,
    color: Styles.COLORS.black,
    backgroundColor: Styles.COLORS[400],
    width: "100%",
    elevation: 9,
    shadowOpacity: 0.5,
    shadowColor: Styles.COLORS[500],
    borderRadius: Styles.RADIUS.small,
  },
  image: {
    width: 120,
    height: 24,
    marginVertical: 10,
    resizeMode: "contain",
  },
  subHeader: {
    fontSize: Styles.FONT_SIZE.base,
    fontFamily: "Barlow-Regular",
    marginBottom: 12,
  },
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Styles.COLORS.black,
    borderRadius: Styles.RADIUS.small,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    fontFamily: "Barlow-Regular",
  },
});

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import LoginButton from "./LoginButton";
import LoginImg from "./LoginImg";

const TechnicianLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginImg />
      <View style={styles.inputContainer}>
        <View style={[styles.input, emailFocused ? styles.inputFocused : null]}>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            style={styles.inputText}
          />
          <Ionicons
            name="mail"
            size={24}
            color={emailFocused ? "hsla(151, 100%, 39%, 1)" : "#ccc"}
            style={styles.icon}
          />
        </View>
        <View
          style={[styles.input, passwordFocused ? styles.inputFocused : null]}
        >
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            style={styles.inputText}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}   style={[styles.icon, styles.iconRight]} >
            <Ionicons
              name={showPassword ? "eye": "eye-off"}
              color={passwordFocused ? "hsla(151, 100%, 39%, 1)" : "#ccc"}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
      <LoginButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: wp("80%"),
    marginVertical: hp("2%"),
  },
  input: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1.5%"),
    marginBottom: hp("2%"),
  },
  inputFocused: {
    borderColor: "hsla(151, 100%, 39%, 1)",
  },
  inputText: {
    flex: 1,
    marginRight: 10, // Adjust this value to increase/decrease space between text input 
  },
  icon: {
    position: "absolute",
    right: wp("3%"),
  },
  iconRight: {
    right: wp("3%"), // Adjust this value to align the icon more to the right
  },
});

export default TechnicianLoginScreen;

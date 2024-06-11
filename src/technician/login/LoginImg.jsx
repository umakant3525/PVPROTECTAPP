import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LoginImg = () => {
  const clientLoginImg = require("../../../assets/login/technicianlogin.png");

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={clientLoginImg}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.loginText}> Technician Login Here !</Text>
    </View>
  );
};

export default LoginImg;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
  },
  image: {
    width: wp("80%"),
    height: hp("30%"),
  },
  loginText: {
    textAlign : 'center',
    fontSize: wp("8%"),
    marginVertical: hp("2%"),
    fontWeight: "bold",
  },
});

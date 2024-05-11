import React, { useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, Animated } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// Define image sources
const pvprotectLogo = require("../assets/pvprotectlogobgrm.png");
const sustainfyLogo = require("../assets/sustainfylogo.png");

const HomeScreen = () => {
  const logoAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoAnimation, {
      toValue: 1,
      duration: 2000, // Adjust duration as needed
      useNativeDriver: true, // This is important for performance
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [
              {
                translateY: logoAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-100, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Image source={pvprotectLogo} style={styles.logoImage} />
      </Animated.View>

      <View style={styles.poweredByContainer}>
        <Text style={styles.poweredByText}>Powered by</Text>
        <Image source={sustainfyLogo} style={styles.poweredByLogo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 260,
    height: 260,
    resizeMode: "contain",
  },
  poweredByContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: hp("8%"),
  },
  poweredByText: {
    color: "hsla(240, 2%, 54%, 1)",
    fontSize: 25,
    marginBottom: 10,
  },
  poweredByLogo: {
    width: 173,
    height: 90,
    resizeMode: "contain",
  },
});

export default HomeScreen;

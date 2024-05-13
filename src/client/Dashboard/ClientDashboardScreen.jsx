import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import Header from "./Header";
import Carousel from "./Carousel";

const ClientDashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text style={{marginVertical : 40}}>
        helo
      </Text>
      <Carousel />
    </View>
  );
};

export default ClientDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

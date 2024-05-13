import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Cards from "./Cards";

const ClientDashboardScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Carousel />
        <Cards />
      </ScrollView>
    </View>
  );
};

export default ClientDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

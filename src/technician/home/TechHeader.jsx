import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TechHeader = () => {
  // const profileicon = "https://static.vecteezy.com/system/resources/previews/000/351/864/original/engineer-vector-icon.jpg";
  const profileicon = "https://cdn0.iconfinder.com/data/icons/occupation-001/64/engineer-professional-occupation-avatar-512.png";


  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>👋 Welcome back,</Text>
            <Text style={styles.techName}>Umakant Shinde </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
        <Image source={{ uri: profileicon }} style={styles.profileIcon} />
          <Text style={styles.techId}>technicianid1234</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("6%"),
    marginBottom: hp("1%"),
    paddingHorizontal: wp("4%"),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: wp("5%"),
    color: "black",
  },
  techName: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: "black",
  },
  rightContainer: {
    alignItems: "center",
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth : 0.5
  },
  techId: {
    fontSize: wp("3%"),
    color: "gray",
    marginTop: hp("0.5%"),
  },
});

export default TechHeader;

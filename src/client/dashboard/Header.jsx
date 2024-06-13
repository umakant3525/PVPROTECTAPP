import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import useLocation from "../../common/location/useLocation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = () => {
  const { latitude, longitude, city, errorMessage, loading } = useLocation();
  const planticon = require("../../../assets/clientdashboard/planticon.png");
  const profileicon = require("../../../assets/clientdashboard/profile.jpg");

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Image source={planticon} style={styles.planticon} />
          <View style={styles.textContainer}>
            <Text style={styles.plantName}> Ruturaj Plant </Text>
            <Text style={styles.plantId}>plantid123,  {loading ? "Loading..." : city}</Text>
            {errorMessage ? (
              <Text style={styles.error}>{errorMessage}</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.ownerInfoContainer}>
            <Text style={styles.ownerName}>Ruturaj Patil </Text>
            <Text style={styles.ownerId}>Ownerid1234</Text>
          </View>
          <Image source={profileicon} style={styles.profileIcon} />

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
    marginTop: hp("5%"),
    marginBottom: hp("1%"),
    paddingHorizontal: wp("4%"),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: wp("2%"),
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  planticon: {
    width: 45,
    height: 45,
  },
  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  error: {
    fontSize: wp('2%'),
    color: "red",
    marginTop: 1,
  },
  ownerInfoContainer: {
    marginLeft: wp("2%"),
    alignItems: "flex-start",
  },
  ownerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  ownerId: {
    fontSize: 10,
    color: "gray",
  },
  plantName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  plantId: {
    fontSize: 10,
    color: "gray",
  },
});

export default Header;

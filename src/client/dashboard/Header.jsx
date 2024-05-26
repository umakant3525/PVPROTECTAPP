import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';
import useLocation from '../../common/location/useLocation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Header = () => {
  const { latitude, longitude, city, errorMessage, loading } = useLocation();
  const locationicon = require("/home/umakant/Desktop/my-app/assets/clientdashboard/location2.png");
  const profileicon = require("/home/umakant/Desktop/my-app/assets/clientdashboard/profile.jpg");

  return (
    <SafeAreaView> 
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Image source={locationicon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {loading ? 'Loading...' : city}
            </Text>
            <Text style={styles.subText}>
              {loading ? 'Loading...' : `${latitude}, ${longitude}`}
            </Text>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Image source={profileicon} style={styles.profileIcon} />
        </View>
      </View>
      <Text style={styles.welcomeMessage}>👋 Welcome, Umakant!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('6%'),
    marginBottom: hp('1%'),
    paddingHorizontal: wp('4%'),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: wp('2%'),
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 26,
    height: 26,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 8,
    color: 'gray',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
  welcomeMessage: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#4B0082', // Indigo color for the welcome message
    marginBottom: hp('0.5%'),
    textAlign: 'center',
  },
});

export default Header;

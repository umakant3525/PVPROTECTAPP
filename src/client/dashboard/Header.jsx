import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useLocation from '../../common/location/useLocation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const Header = () => {
  const { latitude, longitude, city, errorMessage, loading } = useLocation();

  return (
      <View style={styles.locationContainer}>
        <Text style={styles.text}>
          Latitude: {loading ? <Text>Loading...</Text> : latitude}
        </Text>
        <Text style={styles.text}>
          Longitude: {loading ? <Text>Loading...</Text> : longitude}
        </Text>
        <Text style={styles.text}>
          City: {loading ? <Text>Loading...</Text> : city}
        </Text>

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
  );
};

const styles = StyleSheet.create({
 
  locationContainer: {
    marginTop : hp('5%'),
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});

export default Header;

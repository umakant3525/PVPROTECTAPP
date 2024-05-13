import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useLocation from '../../common/location/useLocation';

const ClientDashboardScreen = () => {
  const { latitude, longitude, city, errorMessage, loading } = useLocation();

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    padding: 20,
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

export default ClientDashboardScreen;

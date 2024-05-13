import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useLocation from '../../common/location/useLocation';

const ClientDashboardScreen = () => {
  const { latitude, longitude, city, errorMessage } = useLocation();

  return (
    <View style={styles.container}>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <View style={styles.locationContainer}>
          <Text>Latitude: {latitude}</Text>
          <Text>Longitude: {longitude}</Text>
          <Text>City: {city}</Text>
        </View>
      )}
    </View>
  )
}

export default ClientDashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    alignItems: 'center',
  },
})

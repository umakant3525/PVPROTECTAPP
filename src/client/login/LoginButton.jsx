import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';

const LoginButton = () => {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate('SelectPlantScreen'); // plant selection 
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={goToLoginScreen}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  buttonContainer: {
    top: hp('10%'),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    height: hp('6%'),
    width: wp('80%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', // Add this line
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';

const TowardsRoleButton = () => {
  const navigation = useNavigation();

  const goToRoleScreen = () => {
    navigation.navigate('SelectRoleScreen'); 
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={goToRoleScreen}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TowardsRoleButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: hp('10%'),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: wp('3%'),
    paddingHorizontal: hp('10%'),
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

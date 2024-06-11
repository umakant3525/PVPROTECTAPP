import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Pressable, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const SelectRoleScreen = () => {
  const navigation = useNavigation();

  const goToClientLoginScreen = () => {
    navigation.navigate('ClientLoginScreen'); 
  };

  const goToTechnicianLoginScreen = () => {
    navigation.navigate('TechnicianLoginScreen'); 
  };

  const userRoleImage = require('../../../assets/role/clientrole.png');
  const technicianRoleImage = require('../../../assets/role/technicianrole.png');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Pressable style={styles.button} onPress={goToClientLoginScreen}>
        <Image source={userRoleImage} style={styles.image} />
      </Pressable>
      <Pressable style={styles.button} onPress={goToTechnicianLoginScreen}>
        <Image source={technicianRoleImage} style={styles.image} />
      </Pressable>
    </SafeAreaView>
  );
};

export default SelectRoleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: wp('8%'),
    marginBottom: hp('3%'),
    fontWeight : '600'
  },
  button: {
    marginVertical: hp('1%'),
  },
  image: {
    width: wp('50%'),
    height: hp('30%'),
    resizeMode: 'contain',
  },
});

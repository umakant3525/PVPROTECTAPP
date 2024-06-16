import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const BeforeImageSelection = ({ selectImage, uploadImagelogo }) => {
  return (
    <View style={styles.uploadbtnview}>
      <Text style={styles.uploadText}>Upload Safety Gear Photo</Text>
      <TouchableOpacity onPress={selectImage}>
        <Image
          source={uploadImagelogo}
          style={styles.uploadImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadbtnview: {
    alignItems: "center",
  },
  uploadText: {
    fontSize: 18,
    marginBottom: hp("2%"),
  },
  uploadImage: {
    width: wp("90%"),
    height: hp("20%"),
    marginBottom: hp("2%"),
  },
});

export default BeforeImageSelection;

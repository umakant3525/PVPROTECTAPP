import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AfterImageSelection = ({ selectedImage, deleteImage, startUpload }) => {
  return (
    <View style={styles.uploadedContainer}>
      <Image
        source={{ uri: selectedImage }}
        style={styles.selectImageImage}
        resizeMode="cover"
      />
      <View style={styles.imageDetails}>
        <Text style={styles.imageName}>Image Name</Text>
        <Text style={styles.imageSize}>12 MB</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={deleteImage}>
          <MaterialCommunityIcons
            name="delete-forever"
            size={24}
            color="#EF4343"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={startUpload}>
          <FontAwesome5
            name="check-circle"
            size={24}
            color="#16A249"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
    padding: wp("5%"),
  },
  selectImageImage: {
    width: wp("20%"),
    height: hp("10%"),
    marginRight: wp("3%"),
    borderRadius: 10,
  },
  imageDetails: {
    flex: 1,
  },
  imageName: {
    fontSize: 16,
    marginBottom: 4,
  },
  imageSize: {
    fontSize: 12,
    color: "#666",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: wp("2%"),
  },
});

export default AfterImageSelection;

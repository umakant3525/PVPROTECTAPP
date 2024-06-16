import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const CleaningCycleFormComponent = () => {
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  const handleChooseFile = () => {
    setSelectedFileName("No File Choosen");
  };

  const PlaceholderImage = require("../../../../assets/visitform/PlaceholderImage.png");
  const choosefilebtn = require("../../../../assets/visitform/choosefilebtn.png");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cleaning Cycle Number 1</Text>

      {["Client Signature", "Before Cleaning", "After Cleaning", "Invertor"].map((title) => (
        <View style={styles.uploadContainer} key={title}>
          <Text style={styles.uploadTitle}>Upload {title} Photo</Text>
          <View style={styles.uploadRow}>
            <Image source={PlaceholderImage} style={styles.placeholderImage} />
            <TouchableOpacity onPress={handleChooseFile}>
              <Image source={choosefilebtn} style={styles.chooseFileButton} />
              <Text>{selectedFileName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CleaningCycleFormComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  uploadContainer: {
    marginVertical: 5,
  },
  uploadTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "gray",
  },
  uploadRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholderImage: {
    width: wp("25%"),
    height: wp("25%"),
  },
  chooseFileButton: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
});

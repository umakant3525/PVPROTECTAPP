import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const UploadImageComponent = ({ progress, uploading, uploadedImage, navigation }) => {
  const gotoVisitFormScreen = () => {
    navigation.navigate("VisitFormScreen"); // Navigate to VisitFormScreen
  };

  return (
    <View>
      {uploading && (
        <View style={styles.uploadingBar}>
          <View style={[styles.progress, { width: `${progress * 100}%` }]} />
        </View>
      )}
      {uploading && <Text>{Math.floor(progress * 100)}%</Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            uploadedImage && progress === 1 ? styles.buttonEnabled : styles.buttonDisabled,
          ]}
          onPress={gotoVisitFormScreen}
          disabled={!uploadedImage || progress !== 1}
        >
          <Text style={styles.buttonText}>VisitFormScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadingBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: hp("2%"),
  },
  progress: {
    height: "100%",
    backgroundColor: "#4caf50", // Color for progress indication
  },
  buttonContainer: {
    top: hp("10%"),
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: hp("6%"),
    width: wp("80%"),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonEnabled: {
    backgroundColor: "black",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UploadImageComponent;

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import BeforeImageSelection from './BeforeImageSelection';
import AfterImageSelection from './AfterImageSelection';
import UploadImageComponent from './UploadImageComponent';

const SafetyFormScreen = ({ navigation }) => {
  const uploadImagelogo = require("../../../../assets/safety/uploadlogoimg.png");
  const [selectedImage, setSelectedImage] = useState(null); // For the selected image URI
  const [uploadedImage, setUploadedImage] = useState(null); // For the uploaded image URI
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const selectImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Please grant permission to access photos.');
        return;
      }
      
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [8, 12],
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri); // Set the URI of the selected image
      }
      console.log(result.uri)
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const deleteImage = () => {
    setSelectedImage(null); // Clear the selected image URI
    setProgress(0);
    setUploading(false);
  };

  const startUpload = async () => {
    setUploading(true);
    setProgress(0);

    try {
      // Simulate uploading image to an online service
      // Replace this with actual upload logic
      setTimeout(() => {
        setUploadedImage(selectedImage); // Set uploadedImage to selectedImage URI
        setUploading(false);
        navigation.navigate("VisitFormScreen");
      }, 3000);

    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
      Alert.alert('Upload Failed', 'There was an error uploading the image. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Safety Verification</Text>

      <View style={styles.shadowBorderContainer}>
        {!selectedImage ? (
          <BeforeImageSelection selectImage={selectImage} uploadImagelogo={uploadImagelogo} />
        ) : (
          <AfterImageSelection
            selectedImage={selectedImage} // Pass selected image URI
            deleteImage={deleteImage}
            startUpload={startUpload} // Pass startUpload function
          />
        )}

        {uploading && (
          <UploadImageComponent
            progress={progress}
            uploading={uploading}
            uploadedImage={uploadedImage} // Display uploaded image URI
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("2%"),
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: hp("10%"),
    marginBottom: hp("5%"),
  },
  shadowBorderContainer: {
    backgroundColor: "#fff",
    padding: wp("4%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: wp("90%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SafetyFormScreen;

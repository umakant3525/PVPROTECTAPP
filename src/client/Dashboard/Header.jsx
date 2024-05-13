import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading your location...");
  const profileImg = require("../../../assets/1.jpg")

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
  };

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Use reverse geocoding to get address details
      let addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (addressResponse && addressResponse.length > 0) {
        const city = addressResponse[0].city;
        const country = addressResponse[0].country;
        setDisplayCurrentAddress(`${city}, ${country}`);
      }
    } catch (error) {
      console.error("Error fetching location: ", error);
      Alert.alert("Error fetching location", error.message);
    }
  };

  const onPressProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
      <MaterialIcons name="location-on" size={30} color="#fd5c63" />
      <View>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
        <Text>{displayCurrentAddress}</Text>
      </View>
      <Pressable
        onPress={onPressProfile}
        style={{ marginLeft: "auto", marginRight: 7 }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 20 }}
          source={profileImg}
        />
      </Pressable>
    </View>
  );
};

export default Header;

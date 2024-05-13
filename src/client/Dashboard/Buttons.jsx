import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Buttons = () => {
  const buttonsData = [
    {
      id: "1",
      name: "Current Weather",
      screenName: "CurrentWeather",
      iconName: "wb-sunny",
    },
    {
      id: "2",
      name: "City Weather",
      screenName: "CityWeather",
      iconName: "location-city",
    },
    {
      id: "3",
      name: "Weather Predictor",
      screenName: "FutureWeather",
      iconName: "cloud",
    },
    {
      id: "4",
      name: "Crop Predictor",
      screenName: "CropPredictor",
      iconName: "agriculture",
    },
    {
      id: "5",
      name: "Crop Health",
      screenName: "CropHealth",
      iconName: "favorite-border",
    },
    {
      id: "6",
      name: "Crop Advisory",
      screenName: "CropAdvisory",
      iconName: "notifications",
    },
    {
      id: "7",
      name: "MarketPLace",
      screenName: "MarketPLace",
      iconName: "shopping-cart",
    },
    {
      id: "8",
      name: "Community",
      screenName: "Community",
      iconName: "people",
    },
    {
      id: "9",
      name: "Govt Schemes",
      screenName: "GovtSchemes",
      iconName: "verified-user",
    },
    {
      id: "10",
      name: "Helpline",
      screenName: "Helpline",
      iconName: "phone",
    },
  ];

  const handleWeatherCategoryPress = (screenName) => {
    navigation.navigate(screenName, { latitude, longitude });
  };

  return (
    <View style={styles.container}>
      {buttonsData.map(({ id, name, iconName, screenName }) => (
        <Pressable
          key={id}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.selectedButton, // Apply selectedButton style when button is pressed
          ]}
          onPress={() => handleWeatherCategoryPress(screenName)}
        >
          <MaterialIcons name={iconName} size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>{name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap', // Allow buttons to wrap to the next line if necessary
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust the width as needed to fit two buttons in a row
    aspectRatio: 1, // Maintain a square shape for each button
    marginVertical: 10, // Add vertical margin between buttons
    borderRadius: 10, // Rounded corners for button
    backgroundColor: '#ffffff', // Default background color for button
    elevation: 5, // Add elevation for a card-like effect
  },
  selectedButton: {
    backgroundColor: '#a0d8ef', // Change background color when button is pressed
  },
  icon: {
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default Buttons;

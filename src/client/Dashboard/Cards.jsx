import React from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { Fontisto, FontAwesome5, Feather } from '@expo/vector-icons';

const Cards = ({ navigation, latitude, longitude }) => {
  const cardsData = [
    {
      id: "1",
      name: "Current Weather",
      screenName: "CurrentWeather",
      thumbnail: 10,
      iconComponent: <Fontisto name="day-sunny" size={24} color="black" />,
    },
    {
      id: "2",
      name: "City Weather",
      screenName: "CityWeather",
      thumbnail: 20,
      iconComponent: <FontAwesome5 name="city" size={24} color="black" />,
    },
    {
      id: "3",
      name: "Weather Predictor",
      screenName: "FutureWeather",
      thumbnail: 30,
      iconComponent: <Feather name="cloud" size={24} color="black" />,
    },
    {
      id: "4",
      name: "Crop Predictor",
      screenName: "CropPredictor",
      thumbnail: 40,
      iconComponent: <Fontisto name="leaf" size={24} color="black" />,
    },
    {
      id: "5",
      name: "Crop Health",
      screenName: "CropHealth",
      thumbnail: 50,
      iconComponent: <Fontisto name="heart-empty" size={24} color="black" />,
    },
    {
      id: "6",
      name: "Crop Advisory",
      screenName: "CropAdvisory",
      thumbnail: 60,
      iconComponent: <Fontisto name="notifications" size={24} color="black" />,
    },
    {
      id: "7",
      name: "MarketPlace",
      screenName: "MarketPlace",
      thumbnail: 70,
      iconComponent: <FontAwesome5 name="shopping-basket" size={24} color="black" />,
    },
    {
      id: "8",
      name: "Community",
      screenName: "Community",
      thumbnail: 80,
      iconComponent: <FontAwesome5 name="users" size={24} color="black" />,
    },
    {
      id: "9",
      name: "Govt Schemes",
      screenName: "GovtSchemes",
      thumbnail: 90,
      iconComponent: <FontAwesome5 name="check-circle" size={24} color="black" />,
    },
    {
      id: "10",
      name: "Helpline",
      screenName: "Helpline",
      thumbnail: 100,
      iconComponent: <Feather name="phone-call" size={24} color="black" />,
    },
  ];

  const handleWeatherCategoryPress = (screenName) => {
    navigation.navigate(screenName, { latitude, longitude });
  };

  return (
    <View style={styles.container}>
      {cardsData.map(({ id, name, iconComponent, screenName, thumbnail }) => (
        <Pressable
          key={id}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.selectedButton,
          ]}
          onPress={() => handleWeatherCategoryPress(screenName)}
        >
          {iconComponent}
          <Text style={styles.text}>{name}</Text>
          <View style={styles.thumbnailContainer}>
            <Text style={styles.thumbnailText}>{thumbnail}%</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    aspectRatio: 1,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 5,
  },
  selectedButton: {
    backgroundColor: '#a0d8ef',
  },
  icon: {
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  thumbnailContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    padding: 2,
  },
  thumbnailText: {
    fontSize: 10,
  },
});

export default Cards;

import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Fontisto, FontAwesome5, Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Cards = () => {

  const navigation = useNavigation();
  const cardsData = [
    {
      id: "1",
      name: "Bill Analysis",
      screenName: "BillAnalysisScreen",
      thumbnail: 10,
      iconComponent: <Fontisto name="day-sunny" size={24} color="black" />,
    },
    {
      id: "2",
      name: "Generation",
      screenName: "GenerationScreen",
      thumbnail: 20,
      iconComponent: <FontAwesome5 name="city" size={24} color="black" />,
    },
    {
      id: "3",
      name: "Cleaning",
      screenName: "CleaningScreen",
      thumbnail: 30,
      iconComponent: <Feather name="cloud" size={24} color="black" />,
    },
    {
      id: "4",
      name: "Reports",
      screenName: "ReportsScreen",
      thumbnail: 40,
      iconComponent: <FontAwesome5 name="city" size={24} color="black" />,
    },
    {
      id: "5",
      name: "EPI",
      screenName: "EpiScreen",
      thumbnail: 50,
      iconComponent: <FontAwesome5 name="city" size={24} color="black" />
    },
    {
      id: "6",
      name: "Plant Information",
      screenName: "PlantInformationScreen",
      thumbnail: 60,
      iconComponent: <FontAwesome5 name="city" size={24} color="black" />
    },
    {
      id: "7",
      name: "Irradiation",
      screenName: "IrradiationScreen",
      thumbnail: 70,
      iconComponent: <FontAwesome5 name="shopping-basket" size={24} color="black" />,
    },
    {
      id: "8",
      name: "Financial Analysis",
      screenName: "FinancialAnalysisScreen",
      thumbnail: 80,
      iconComponent: <FontAwesome5 name="users" size={24} color="black" />,
    },
    {
      id: "9",
      name: "Last",
      screenName: "LastScreen",
      thumbnail: 90,
      iconComponent: <FontAwesome5 name="check-circle" size={24} color="black" />,
    }
  ];

  const handleWeatherCategoryPress = (screenName) => {
    navigation.navigate(screenName);
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

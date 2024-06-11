import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const Cards = () => {
  const navigation = useNavigation();
  const cardsData = [
    {
      id: "1",
      name: "Bill Analysis",
      screenName: "Bill_Analysis",
      description: "Expected bill: 45656",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Bill_Analysis_Logo.png'),
      cardBackground: "#FFEAE9",
    },
    {
      id: "2",
      name: "Generation Values",
      screenName: "Generation_Values",
      description: "23923 Kwh",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Generation_Logo.png'),
      cardBackground: "#EDE4FF",
    },
    {
      id: "3",
      name: "Cleaning",
      screenName: "Cleaning_Cycle",
      description: "6/24 cycles completed",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Cleaning_Logo.png'),
      cardBackground: "#E4FFEE",
    },
    {
      id: "4",
      name: "Reports",
      screenName: "Reports",
      description: "Report name\nDate: 12/2/24",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Reports_Logo.png'),
      cardBackground: "#E4ECFF",
    },
    {
      id: "5",
      name: "EPI",
      screenName: "EPI",
      description: "80%",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Epi_Logo.png'),
      cardBackground: "#E9FBFF",
    },
    {
      id: "6",
      name: "Plant Information",
      screenName: "PlantInformationScreen",
      description: "Vikram Solar Energy",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Plant_Info_Logo.png'),
      cardBackground: "#FDE9FF",
    },
    {
      id: "7",
      name: "Irradiation",
      screenName: "IrradiationScreen",
      description: "20 kw/m^2",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Irradiation_Logo.png'),
      cardBackground: "#E9F2FF",
    },
    {
      id: "8",
      name: "Financial Analysis",
      screenName: "Financial_Analysis",
      description: "Revenue Earned: ₹34,222",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Financial_Analysis_Logo.png'),
      cardBackground: "#E9FFEF",
    },
    {
      id: "9",
      name: "Payment Tracking",
      screenName: "Payment_Tracking_Screen",
      description: "1000₹ Pending",
      logoimg: require('/home/umakant/Desktop/my-app/assets/clientdashboard/cardlogo/Payment_Tracking_Logo.png'),
      cardBackground: "#F8FFE9",
    },
  ];

  const handleWeatherCategoryPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {cardsData.map(({ id, name, description, screenName, logoimg, cardBackground }) => (
        <Pressable
          key={id}
          style={({ pressed }) => [
            styles.card,
            { backgroundColor: cardBackground },
            pressed && styles.selectedCard,
          ]}
          onPress={() => handleWeatherCategoryPress(screenName)}
        >
          <Image source={logoimg} style={styles.logo} />
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
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
    marginTop: 10,
    marginBottom: hp("10%")
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    aspectRatio: 1,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 1,
  },
  selectedCard: {
    backgroundColor: '#a0d8ef',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Cards;

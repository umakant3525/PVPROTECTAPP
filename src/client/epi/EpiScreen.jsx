import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const greenIcon = require("../../../assets/epi/green.png");
const orangeIcon = require("../../../assets/epi/orange.png");
const redIcon = require("../../../assets/epi/red.png");
const yellowIcon = require("../../../assets/epi/yellow.png");

const epiData = [
  {
    id: 1,
    percentage: 95,
    updatedBy: "Umakant Shinde",
    date: "10/11/2023",
    day: "Today"
  },
  {
    id: 2,
    percentage: 80,
    updatedBy: "John Doe",
    date: "12/15/2023",
    day: "Yesterday"
  },
  {
    id: 3,
    percentage: 60,
    updatedBy: "Jane Smith",
    date: "01/20/2024",
    day: "Monday"
  },
  {
    id: 4,
    percentage: 45,
    updatedBy: "Alice Johnson",
    date: "03/05/2024",
    day: "Monday"

  },
  {
    id: 5,
    percentage: 30,
    updatedBy: "Bob Williams",
    date: "04/10/2024",
    day: "Monday"
  },
  {
    id: 6,
    percentage: 20,
    updatedBy: "Eve Brown",
    date: "05/15/2024",
    day: "Monday"
  },
  {
    id: 7,
    percentage: 5,
    updatedBy: "Michael Lee",
    date: "06/20/2024",
    day: "Monday"
  },
];


const getIcon = (percentage) => {
  if (percentage > 75) return greenIcon;
  if (percentage > 50) return yellowIcon;
  if (percentage > 25) return orangeIcon;
  return redIcon;
};

const getTagColor = (day) => {
  return day === "Today" ? "yellow" : "#ccc"; // Yellow for "Today", Grey for other days
};

const EpiScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {epiData.map((data) => (
          <View style={styles.horizontalFlex} key={data.id}>
            <View style={styles.textContainer}>
              <View style={[styles.tag , { backgroundColor: getTagColor(data.day) }]}>
                <Text style={styles.tagText}>{data.day}</Text>
              </View>
              <Text style={styles.textDate}>{data.date}</Text>
              <Text style={styles.textUpdatedBy}>
                Updated by:
                <Text style={styles.textUpdatedByname}> {data.updatedBy} </Text>
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Image source={getIcon(data.percentage)} style={styles.icon} />
            </View>
            <View style={styles.percentageContainer}>
              <Text style={styles.percentage}>{data.percentage}%</Text>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default EpiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("5%"),
    backgroundColor: "#ffff",
  },
  horizontalFlex: {
    flexDirection: "row",
    alignItems: "center",
    padding: wp("2%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: hp("2%"), // Add margin between each item
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 5,
    padding: wp("1%"),
  },
  tag: {
    marginBottom: hp("1%"),
    padding: wp("1%"),
  },
  tagText: {
    fontSize: wp("4%"),
    fontWeight: "500",
    color: "#000000",
  },
  textDate: {
    fontSize: wp("5%"),
    marginBottom: hp("1%"),
    color: "#000000",
    fontWeight: "500",
  },
  textUpdatedBy: {
    fontSize: wp("4%"),
    color: "#777777",
  },
  textUpdatedByname: {
    color: "#000000",
  },
  iconContainer: {
    width: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: wp("15%"),
    resizeMode: "contain",
  },
  percentageContainer: {
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontSize: wp("10%"),
    fontWeight: "500",
    color: "#000",
  },
});


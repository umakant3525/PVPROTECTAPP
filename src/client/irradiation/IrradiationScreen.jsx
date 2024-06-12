import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const irradiationIcon = require("../../../assets/clientdashboard/cardlogo/Irradiation_Logo.png");

const IrradiationScreen = () => {
  const irradiationData = [
    { month: "Jan-2023", irradiation: "5.5", location: "Location1" },
    { month: "Feb-2023", irradiation: "5.5", location: "Location2" },
    { month: "Mar-2023", irradiation: "5.5", location: "Location1" },
    { month: "Apr-2023", irradiation: "5.5", location: "Location3" },
    { month: "May-2023", irradiation: "5.5", location: "Location1" },
    { month: "Jun-2023", irradiation: "6.0", location: "Location4" },
    { month: "Jul-2023", irradiation: "6.2", location: "Location1" },
    { month: "Aug-2023", irradiation: "6.3", location: "Location2" },
    { month: "Sep-2023", irradiation: "5.8", location: "Location3" },
    { month: "Oct-2023", irradiation: "5.7", location: "Location4" },
    { month: "Nov-2023", irradiation: "5.4", location: "Location1" },
    { month: "Dec-2023", irradiation: "5.1", location: "Location2" },
    { month: "Jan-2024", irradiation: "4.5", location: "Location4" },
    { month: "Feb-2024", irradiation: "5.5", location: "Location1" },
    { month: "Mar-2024", irradiation: "5.7", location: "Location2" },
    { month: "Apr-2024", irradiation: "5.8", location: "Location3" },
    { month: "May-2024", irradiation: "6.1", location: "Location1" },
    { month: "Jun-2024", irradiation: "6.2", location: "Location4" },
    { month: "Jul-2024", irradiation: "6.3", location: "Location2" },
    { month: "Aug-2024", irradiation: "6.4", location: "Location3" },
    { month: "Sep-2024", irradiation: "6.0", location: "Location1" },
    { month: "Oct-2024", irradiation: "5.9", location: "Location4" },
    { month: "Nov-2024", irradiation: "5.5", location: "Location2" },
    { month: "Dec-2024", irradiation: "5.3", location: "Location3" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Image source={irradiationIcon} style={styles.image} />
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.columnHeader}>Month(Year)</Text>
            <Text style={styles.columnHeader}>Irradiation (kWh/m²/day)</Text>
            <Text style={styles.columnHeader}>Location</Text>
          </View>
          {irradiationData.map((data, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell}>{data.month}</Text>
              <Text style={styles.cell}>{data.irradiation}</Text>
              <Text style={styles.cell}>{data.location}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IrradiationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("1%"),
    backgroundColor: "#F8F8F8",
  },
  descriptionContainer: {
    marginVertical: hp("2%"),
    alignItems: "center",
  },
  image: {
    width: wp("20%"),
    height: wp("20%"),
    resizeMode: "contain",
  },
  tableContainer: {
    borderRadius: 8,
    padding: wp("1%"),
    overflow: "hidden",
  },
  tableHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp("1%"),
    borderBottomWidth: 1,
    borderColor: "#D1D1D1",
    backgroundColor: "#D1D1D1",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1%"),
    borderBottomWidth: 1,
    borderColor: "#D1D1D1",
    backgroundColor: "#ECECEC",
  },
  columnHeader: {
    width: wp("30%"),
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: hp("1%"),
  },
  cell: {
    width: wp("30%"),
    textAlign: "center",
    paddingVertical: hp("1%"),
    fontWeight: "300",
    fontSize: wp("4%"),
  },
});

import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const overview_data = [
  { data: "Plant ID", values: "ABCDE1234" },
  { data: "Plant Name ", values: "Ruturaj Plant " },
  { data: "Plant Owner Name ", values: "Ruturaj Deshmukh" },
  { data: "Plant Address", values: "Pandharpur Maharastra" }
];


const other_details_data = [
  { data: "Plant COD", values: "1 Feb 2023" },
  { data: "Sustainfy operation year", values: "2023-2024" },
  { data: "Post-Commissioning Audit", values: "Ruturaj Deshmukh" },
  { data: "MSEDCL consumer number", values: "170011755294" },
  { data: "Billing Unit No", values: "4601" },
  { data: "Billing Cycle Date", values: "12 Dec 2024" },
  { data: "MSEDCL registered mobile number", values: "9529342940" },
  { data: "Documents Received", values: "3" },
  { data: "Number of modules", values: "46" },
  { data: "Module make", values: "Vikram" },
  { data: "Watt peak", values: "355" },
  { data: "Module type", values: "Monocrystalline" },
  { data: "Number of string", values: "3" },
  { data: "Inverter make", values: "Sungrow" },
  { data: "Inverter model number", values: "sundac12431" },
  { data: "Number of inverters", values: "4" },
  { data: "Inverter serial number", values: "12345" },
  { data: "Invertor number / kW capacity", values: "200" },
  { data: "Mode of internet connection", values: "LAN" },
];


const plantinfoIcon = require("../../../assets/clientdashboard/cardlogo/Plant_Info_Logo.png");

const PlantInformationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Image source={plantinfoIcon} style={styles.image} />
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.columnHeader}>Overview</Text>
          </View>
          {overview_data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell1}>{item.data}</Text>
              <Text style={styles.cell2}>{item.values}</Text>
            </View>
          ))}
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.columnHeader}>Other Details</Text>
          </View>
          {other_details_data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell1}>{item.data}</Text>
              <Text style={styles.cell2}>{item.values}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlantInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('1%'),
    backgroundColor: '#F8F8F8',
  },
  descriptionContainer: {
    marginVertical: hp('1%'),
    alignItems: 'center', // Center align items in the description container
  },
  image: {
    width: wp('25%'), // Adjust width as needed
    height: wp('25%'), // Adjust height to maintain aspect ratio
    resizeMode: 'contain', // Ensure the image fits within the specified dimensions
  },
  tableContainer: {
    overflow: 'hidden',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('0.5%'),
    borderBottomWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#D1D1D1',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('0.5%'),
    borderBottomWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#ECECEC',
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft : wp('5%'),
    paddingVertical: hp('0.5%'),
  },
  cell1: {
    flex: 1,
    textAlign: 'left',
    paddingVertical: hp('1%'),
    fontWeight: '300',
    fontSize: wp('4%'),
  },
  cell2: {
    flex: 1,
    textAlign: 'right',
    paddingVertical: hp('1%'),
    fontWeight: '500',
    fontSize: wp('4%'),
  },
});

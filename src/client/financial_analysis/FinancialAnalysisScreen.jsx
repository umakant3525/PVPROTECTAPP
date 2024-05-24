import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const data = [
  { data: "User Name", values: "Mr. Ruturaj Deshmukh" },
  { data: "Initial investment", values: "7,000 RS" },
  { data: "Maintenance cost", values: "8,000 RS" },
  { data: "Total unit generation till date", values: "2,000 RS" },
  { data: "Pay back period", values: "2,000 RS" },
  { data: "IRR", values: "2,000 RS" },
  { data: "NVP", values: "2,000 RS" },
];


const financeIcon = require("../../../assets/financeanalysis/finance.png");

const FinancialAnalysisScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Image source={financeIcon} style={styles.image} />
          <Text style={styles.descriptionText}>
            "Power your future with green finance with PV protect."
          </Text>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.columnHeader}>Data</Text>
            <Text style={styles.columnHeader}>Values</Text>
          </View>
          {data.map((item, index) => (
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

export default FinancialAnalysisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('3%'),
    backgroundColor: '#F8F8F8',
  },
  descriptionContainer: {
    marginVertical: hp('2%'),
    alignItems: 'center', // Center align items in the description container
  },
  descriptionText: {
    fontSize: wp('4%'),
    textAlign: 'center',
    color: '#333',
    marginTop: hp('1%'), // Add margin top to separate text from image
    paddingHorizontal: wp('5%'), // Add horizontal padding for better text alignment
    fontStyle: 'italic', // Make text italic
  },
  image: {
    width: wp('20%'), // Adjust width as needed
    height: wp('20%'), // Adjust height to maintain aspect ratio
    resizeMode: 'contain', // Ensure the image fits within the specified dimensions
  },
  tableContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    borderBottomWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#D1D1D1',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    borderBottomWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#ECECEC',
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: hp('1%'),
  },
  cell1: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: hp('1%'),
    fontWeight: '500',
    fontSize: wp('4%'),
  },
  cell2: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: hp('1%'),
    fontWeight: '300',
    fontSize: wp('4%'),
  },
});

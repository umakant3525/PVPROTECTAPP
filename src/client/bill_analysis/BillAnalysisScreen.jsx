import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const billData = [
  {
    readingDate: '2024-01-01',
    importReading: 1200,
    exportReading: 300,
    netReading: 900,
    generationReading: 1500,
    expectedBill: 2500,
  },
  {
    readingDate: '2024-02-01',
    importReading: 1100,
    exportReading: 250,
    netReading: 850,
    generationReading: 1400,
    expectedBill: 2300,
  },
  {
    readingDate: '2024-03-01',
    importReading: 1150,
    exportReading: 200,
    netReading: 950,
    generationReading: 1600,
    expectedBill: 2600,
  },
  {
    readingDate: '2024-04-01',
    importReading: 1250,
    exportReading: 400,
    netReading: 850,
    generationReading: 1700,
    expectedBill: 2700,
  },
  {
    readingDate: '2024-05-01',
    importReading: 1300,
    exportReading: 450,
    netReading: 850,
    generationReading: 1650,
    expectedBill: 2800,
  },
  {
    readingDate: '2024-06-01',
    importReading: 1350,
    exportReading: 500,
    netReading: 850,
    generationReading: 1750,
    expectedBill: 2900,
  },
];

const billIcon = require("../../../assets/clientdashboard/cardlogo/Bill_Analysis_Logo.png");

const BillAnalysisScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Image source={billIcon} style={styles.image} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.columnHeader}>Reading Date</Text>
            <Text style={styles.columnHeader}>Import Reading</Text>
            <Text style={styles.columnHeader}>Export Reading</Text>
            <Text style={styles.columnHeader}>Net Reading</Text>
            <Text style={styles.columnHeader}>Generation Reading</Text>
            <Text style={styles.columnHeader}>Expected Bill (RS)</Text>
          </View>
          {billData.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell}>{item.readingDate}</Text>
              <Text style={styles.cell}>{item.importReading}</Text>
              <Text style={styles.cell}>{item.exportReading}</Text>
              <Text style={styles.cell}>{item.netReading}</Text>
              <Text style={styles.cell}>{item.generationReading}</Text>
              <Text style={styles.cell}>{item.expectedBill}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BillAnalysisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('3%'),
    backgroundColor: '#F8F8F8',
  },
  descriptionContainer: {
    marginVertical: hp('2%'),
    alignItems: 'center',
  },
  image: {
    width: wp('20%'),
    height: wp('20%'),
    resizeMode: 'contain',
  },
  tableContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    width: wp('120%'),  // Ensure the table is wider than the screen
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderBottomWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#D1D1D1',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    borderBottomWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#ECECEC',
  },
  columnHeader: {
    width: wp('20%'),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: hp('1%'),
  },
  cell: {
    width: wp('20%'),
    textAlign: 'center',
    paddingVertical: hp('1%'),
    fontWeight: '300',
    fontSize: wp('4%'),
  },
});

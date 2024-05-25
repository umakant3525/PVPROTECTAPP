import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const data = [
  { details: "1st Payment", amount: "100 Rs", status: "paid", date: "01-01-2023" },
  { details: "2st Payment ", amount: "7,000 RS", status: "Paid", date: "15-02-2023" },
  { details: "3nd Payment ", amount: "8,000 RS", status: "Pending", date: "20-03-2023" },
  { details: "4rd payment ", amount: "2,000 RS", status: "pending", date: "01-04-2023" },
  { details: "Payment track ", amount: "2,000 RS", status: "paid", date: "10-05-2023" }
];

const billIcon = require("../../../assets/billanalysis/billicon.png");

const BillAnalysisScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Image source={billIcon} style={styles.image} />
        <Text style={styles.descriptionText}>
        " Bill analysis with PV Protect: Your roadmap to solar sustainability, one payment at a time. "
         </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.columnHeader}>Details</Text>
            <Text style={styles.columnHeader}>Amount (RS)</Text>
            <Text style={styles.columnHeader}>Status</Text>
            <Text style={styles.columnHeader}>Date</Text>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell}>{item.details}</Text>
              <Text style={styles.cell}>{item.amount}</Text>
              <Text style={[styles.cell, item.status.toLowerCase() === 'paid' ? styles.statusPaid : styles.statusPending]}>
                {item.status}
              </Text>
              <Text style={styles.cell}>{item.date}</Text>
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
  descriptionText: {
    fontSize: wp('4%'),
    textAlign: 'center',
    color: '#333',
    marginTop: hp('1%'),
    paddingHorizontal: wp('5%'),
    fontStyle: 'italic',
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
    width: wp('25%'),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: hp('1%'),
  },
  cell: {
    width: wp('25%'),
    textAlign: 'center',
    paddingVertical: hp('1%'),
    fontWeight: '300',
    fontSize: wp('4%'),
  },
  statusPaid: {
    backgroundColor: '#A6FDB4',
    color: '#000',
    borderRadius: wp('5%'),
    paddingVertical: hp('0.3%'),
    paddingHorizontal: wp('0.5%'),
    fontWeight: '400',
  },
  statusPending: {
    backgroundColor: '#FFF0BB',
    color: '#000npm',
    borderRadius: wp('5%'),
    paddingVertical: hp('0.3%'),
    paddingHorizontal: wp('0.5%'),
    fontWeight: '400',
  },
});

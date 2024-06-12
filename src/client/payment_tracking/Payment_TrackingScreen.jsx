import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const billIcon = require("../../../assets/clientdashboard/cardlogo/Payment_Tracking_Logo.png");

const PaymentTrackingScreen = () => {
  // Initial contract value
  const contractValue = 10000;
  
  // State to manage payments and remaining balance
  const [payments, setPayments] = useState([
    { slot: '1st Payment', amount: 5000, date: '2024-01-01' },
    { slot: '2nd Payment', amount: 3000, date: '2024-02-01' },
    { slot: '4rd Payment', amount: 1000, date: '2024-03-01' },
    { slot: '5th Payment', amount: 800, date: '2024-03-01' },
    { slot: '6th Payment', amount: 200, date: '2024-03-01' },

  ]);

  const calculateRemaining = (payments, contractValue) => {
    const totalPaid = payments.reduce((sum, payment) => sum + payment.amount, 0);
    return contractValue - totalPaid;
  };

  const remainingAmount = calculateRemaining(payments, contractValue);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Image source={billIcon} style={styles.image} />
        <Text style={styles.descriptionText}>
          Contract Value: {contractValue} RS
        </Text>
        <Text style={styles.descriptionText}>
          Pending Amount: {remainingAmount} RS
        </Text>
      </View>

      <View >
        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.columnHeader}>Payment Slot</Text>
            <Text style={styles.columnHeader}>Paid Amount (Date)</Text>
            <Text style={styles.columnHeader}>Pending</Text>
          </View>
          {payments.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell}>{item.slot}</Text>
              <Text style={styles.cell}>{item.amount} ({item.date})</Text>
              <Text style={styles.cell}>
                {contractValue - payments.slice(0, index + 1).reduce((sum, payment) => sum + payment.amount, 0)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentTrackingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('1%'),
    backgroundColor: '#F8F8F8',
  },
  descriptionContainer: {
    marginVertical: hp('2%'),
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: wp('5%'),
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
    padding: wp('1%'),
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
});

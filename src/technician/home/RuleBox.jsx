import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const rules = [
  { title: "Cleaning Cycle Communication", description: "Ensure that cleaning cycle date and time are communicated to the client." },
  { title: "Client Notification", description: "Inform the client or client representative about the cleaning activity after reaching the site." },
  { title: "Admin Notification", description: "Inform the admin after reaching the site." },
  { title: "Tool Bag", description: "Ensure that you are carrying a tool bag with you." },
  { title: "Safety Equipment", description: "Ensure that you are wearing all safety equipment." },
  { title: "Cleaning Activity", description: "Complete the cleaning activity with maximum accuracy, using less water, and ensure that the lower edge of the module is cleaned properly." },
  { title: "Photo Documentation", description: "Capture before and after photos of the modules." },
  { title: "Meter Readings", description: "Capture the net meter and generation meter readings, along with a photo of the inverter status." },
  { title: "Client Signature", description: "After completion of the activity, get the client's signature." },
  { title: "Site Sign Off", description: "Sign off from the site after informing the manager." }
];


const RuleBox = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rules and Instructions</Text>
      <View>
        {rules.map((rule, index) => (
          <View key={index} style={styles.ruleContainer}>
            <Text style={styles.ruleTitle}>{`${index + 1}. ${rule.title}`}</Text>
            <Text style={styles.ruleDescription}>{rule.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default RuleBox;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('2%'),
    padding: wp('5%'),
    backgroundColor: '#E4FFEE',
    borderRadius: 10,
    borderColor : "#33333359",
    borderWidth : 1,
  },
  title: {
    fontSize: hp('3%'), // Slightly increased for better visibility
    fontWeight: '400',
    marginBottom: hp('1%'), // Slightly increased for better spacing
    backgroundColor : "#33333359",
    color : "#ffff",
    textAlign : "center",
    borderRadius: 10,
  },
  ruleContainer: {
    marginBottom: hp('1%'), // Increased for better separation between rules
  },
  ruleTitle: {
    fontSize: hp('1.6%'), // Increased for better readability
    fontWeight: '500',
    color: '#000',
  },
  ruleDescription: {
    fontSize: hp('1.8%'), // Increased for better readability
    color: '#555',
    marginLeft: wp('5%'), // Slightly increased for better alignment
  }
});

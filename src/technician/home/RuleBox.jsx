import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const rules = [
    { title: "Wear Uniform and Helmet", description: "Ensure you are in your complete uniform with a safety helmet." },
    { title: "Safety Gear", description: "Use safety glasses, gloves, and non-slip shoes." },
    { title: "Check Weather Conditions", description: "Only proceed if weather conditions are safe." },
    { title: "Carry Tools", description: "Take all necessary tools including screwdrivers, wrenches, and multimeters." },
    { title: "Inspect Equipment", description: "Ensure all equipment is in working order before use." },
    { title: "Follow Safety Protocols", description: "Adhere to all site-specific safety protocols." },
    { title: "Take Clear Photos", description: "Capture clear photos of the work area and completed tasks." },
    { title: "Verify Client Details", description: "Double-check the client details and plant location before starting." },
    { title: "Lockout/Tagout Procedures", description: "Follow lockout/tagout procedures to ensure the system is safely de-energized." },
    { title: "Clean Up", description: "Clean the work area and ensure no tools or materials are left behind." }
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
    fontSize: hp('2%'), // Increased for better readability
    fontWeight: '500',
    color: '#000',
  },
  ruleDescription: {
    fontSize: hp('1.5%'), // Increased for better readability
    color: '#555',
    marginLeft: wp('5%'), // Slightly increased for better alignment
  }
});

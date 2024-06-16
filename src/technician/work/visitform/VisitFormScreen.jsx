import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import NoramlVisitFormComponent from "./NoramlVisitFormComponent";
import { CheckBox, Icon } from "react-native-elements";
import CleaningCycleFormComponent from "./CleaningCycleFormComponent";

const VisitFormScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  const submitAllDetails = () => {
    // Define what happens when the form is submitted
    console.log("Form Submitted");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Visit Detail Form</Text>
        <NoramlVisitFormComponent onSubmit={submitAllDetails} />

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            checkedIcon={<Icon name="check-square" type="font-awesome" color="#00C766" />}
            uncheckedIcon={<Icon name="square-o" type="font-awesome" />}
            containerStyle={styles.checkbox}
          />
          <Text style={[styles.checkboxText, isChecked && { color: '#00C766' }]}>
            Is it Cleaning Cycle?
          </Text>
        </View>

        {isChecked && <CleaningCycleFormComponent />}

        <TouchableOpacity style={styles.button} onPress={submitAllDetails}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VisitFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp('1%'),
    marginBottom: hp('1%'), // Adjusted margin bottom
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  scrollContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginTop: hp("5%"),
    textAlign: "center",
    marginVertical: hp("2%"),
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: hp("1%"),
    marginBottom : hp("10%")
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

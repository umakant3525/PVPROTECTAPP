import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation, useRoute } from '@react-navigation/native';
import RuleBox from "../home/RuleBox";

const WorkAprovalScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { clientId, clientName, plantid, plantname, location } = route.params;

    const [isChecked, setIsChecked] = useState(false);

    const selectedData = {
        plantid: plantid,
        plantname: plantname,
        clientid: clientId,
        clientname: clientName,
        plantlocation: location,
    };

    const gositevisitScreen = () => {
        if (isChecked) {
            navigation.navigate('SafetyFormScreen'); // Navigate to SafetyFormScreen after site visit
        }
    };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View>
          <Text style={styles.title}>Selected Information</Text>
          <View style={styles.infoBox}>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="solar-panel-large"
                size={wp("4%")}
                color="#fbc02d"
                style={styles.icon}
              />
              <Text style={styles.infoText}>
                Plant ID: <Text style={styles.infodataText}>{selectedData.plantid}</Text>
              </Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="solar-panel"
                size={wp("4%")}
                color="#fbc02d"
                style={styles.icon}
              />
              <Text style={styles.infoText}>
                Plant Name: <Text style={styles.infodataText}>{selectedData.plantname}</Text>
              </Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="account-box"
                size={wp("4%")}
                color="#ff8a65"
                style={styles.icon}
              />
              <Text style={styles.infoText}>
                Client ID: <Text style={styles.infodataText}>{selectedData.clientid}</Text>
              </Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="account"
                size={wp("4%")}
                color="#ff8a65"
                style={styles.icon}
              />
              <Text style={styles.infoText}>
                Client Name: <Text style={styles.infodataText}>{selectedData.clientname}</Text>
              </Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="map-marker"
                size={wp("4%")}
                color="#F94144"
                style={styles.icon}
              />
              <Text style={styles.infoText}>
                Location: <Text style={styles.infodataText}>{selectedData.plantlocation}</Text>
              </Text>
            </View>
          </View>
        </View>

        <RuleBox />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { opacity: isChecked ? 1 : 0.5 }]}
            onPress={gositevisitScreen}
            disabled={!isChecked}
          >
            <Text style={styles.buttonText}>Site Visit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            checkedIcon={<Icon name="check-square" type="font-awesome" color="#00C766" />}
            uncheckedIcon={<Icon name="square-o" type="font-awesome" />}
            containerStyle={styles.checkbox}
          />
          <Text style={[styles.checkboxText, isChecked && { color: '#00C766' }]}>
            Are you following all instructions mentioned above?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkAprovalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  infoBox: {
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("6%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#33333359",
    marginBottom: hp("1%"),
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp("0.5%"),
  },
  infoText: {
    fontSize: wp("3%"),
  },
  infodataText: {
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
  buttonContainer: {
    marginVertical: hp('1%'), 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    height: hp('6%'),
    width: wp('80%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp('1%') ,
    marginBottom: hp('15%'), // Adjusted margin bottom
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
  icon: {
    marginRight: 10,
  },
});

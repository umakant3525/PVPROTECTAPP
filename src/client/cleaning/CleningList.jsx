import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";



const CleaningList = ({cleaningData}) => {
  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Cycle No. </Text>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>More</Text>
      </View>
      {/* Data Rows */}
      {cleaningData.length > 0 ? (
        cleaningData.map((item, index) => (
          <View style={styles.rowContainer} key={index}>
            <View style={styles.row}>
              <Text style={styles.cycleText}>{item.cycleNumber}</Text>
              <Text style={styles.detailsText}>{item.date}</Text>
              <TouchableOpacity onPress={() => console.log("Pressed")}>
                <AntDesign name="down" size={24} color="#00C766" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text>No any cycle happened</Text>
      )}
    </View>
  );
};

export default CleaningList;

const styles = StyleSheet.create({
  container: {
    marginTop: hp("1%"),
    borderRadius: 15, // Add border radius for rounded corners
  },
  headerRow: {
    marginVertical: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E4FFEE", // Header background color
    padding: 10, // Header padding
    borderRadius: 10, // Add border radius for rounded corners
  },
  headerText: {
    fontSize: wp("5%"),
    fontWeight: "500",
    flex: 1,
    textAlign: "center",
  },
  rowContainer: {
    marginVertical: 5, // Add margin between rows
    borderWidth: 0.5, // Add border width
    borderColor: "#00C766", // Add border color
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10, // Add padding for content spacing
  },
  cycleText: {
    flex: 0.5, // Adjust flex value to change the width ratio
    textAlign: "center",
    fontSize: 16,
  },
  detailsText: {
    flex: 1.5, // Adjust flex value to change the width ratio
    textAlign: "center",
    fontSize: 16,
    color: "#555",
  },
  
});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { cleaningData } from "./cleningdata";

const CleaningList = ({ handleCyclePress }) => {
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
              <TouchableOpacity onPress={() => handleCyclePress(item)}>
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
    marginTop: 10,
    borderRadius: 15,
  },
  headerRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E4FFEE",
    padding: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
    textAlign: "center",
  },
  rowContainer: {
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: "#00C766",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cycleText: {
    flex: 0.5,
    textAlign: "center",
    fontSize: 16,
  },
  detailsText: {
    flex: 1.5,
    textAlign: "center",
    fontSize: 16,
    color: "#555",
  },
});

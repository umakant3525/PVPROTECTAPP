import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { ProgressChart } from "react-native-chart-kit";
import CleningList from "./CleningList";

const CleaningScreen = () => {


  const cleaningData = [
    { cycleNumber: 1,  date: "20/22/2024", doneBy: "Umakant" },
    { cycleNumber: 2, date: "21/22/2024", doneBy: "John" },
    { cycleNumber: 3,  date: "22/22/2025", doneBy: "Alice" },
    { cycleNumber: 4,   date: "20/22/2024", doneBy: "Umakant" },
    { cycleNumber: 5,  date: "21/22/2024", doneBy: "John" },
    { cycleNumber: 6, date: "22/22/2025", doneBy: "Alice" },
    { cycleNumber: 7,  date: "20/22/2024", doneBy: "Umakant" },
    { cycleNumber: 8,  date: "21/22/2024", doneBy: "John" }
  ];
  const completedCycles = cleaningData.length;
  const totalCycles = 24;
  const progress = completedCycles / totalCycles;

  // Data for the ProgressChart
  const progressChartData = {
    labels: ["Cycles"],
    data: [progress],
  };

  // Configurations for the ProgressChart
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 6,
    color: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`, // green color
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {completedCycles} out of {totalCycles}
            </Text>
            <Text style={styles.headerSubText}>cycles are complete</Text>
          </View>
          <View style={styles.progressContainer}>
            <ProgressChart
              data={progressChartData}
              width={wp("88%")} // Use responsive width
              height={220}
              strokeWidth={30}
              radius={90}
              chartConfig={chartConfig}
              hideLegend={true}
            />
          </View>
        </View>
        <CleningList cleaningData={cleaningData}/>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CleaningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    marginTop: hp("2%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    marginTop: 1,
  },
  headerText: {
    fontSize: wp("10%"),
    fontWeight: "700",
  },
  headerSubText: {
    fontSize: wp("6%"),
    fontWeight: "300",
  },
  progressContainer: {
    marginTop: wp("5%"),
    alignItems: "center",
  },
  cycleContainer: {
    flexDirection: "column",
  },
  cycle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
  },
  cycleNumber: {
    width: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  cycleText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
  },
  cycleSubText: {
    flex: 2,
    fontSize: 14,
    fontWeight: "300",
    color: "#555",
  },
});

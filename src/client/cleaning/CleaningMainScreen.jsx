import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ProgressChart } from "react-native-chart-kit";
import CleaningList from "./CleningList"
import { cleaningData } from "./cleningdata";
import CleaningPopUp from "./CleningPopUp";

const CleaningMainScreen = () => {
  const completedCycles = cleaningData.length;
  const totalCycles = 24;
  const progress = completedCycles / totalCycles;

  const progressChartData = {
    labels: ["Cycles"],
    data: [progress],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 6,
    color: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  const [selectedCycle, setSelectedCycle] = useState(null);

  const handleCyclePress = (cycle) => {
    setSelectedCycle(cycle);
  };

  const handleClosePopup = () => {
    setSelectedCycle(null);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
              width={wp("88%")}
              height={220}
              strokeWidth={30}
              radius={90}
              chartConfig={chartConfig}
              hideLegend={true}
            />
          </View>
        </View>
        <CleaningList handleCyclePress={handleCyclePress} />
        {selectedCycle && (
          <>
            <View style={styles.overlay} />
            <CleaningPopUp cycle={selectedCycle} onClose={handleClosePopup} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default CleaningMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black color
  },
});

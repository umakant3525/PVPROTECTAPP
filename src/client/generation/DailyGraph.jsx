import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { BarChart } from "react-native-chart-kit";

const DailyGraph = () => {
  // Data for January with values for all 30 days
  const januaryData = [
    20, 45, 28, 80, 99, 43, 60, 75, 35, 90, 55, 70, 65, 42, 38, 81, 50, 72, 88,
    45, 60, 95, 73, 62, 48, 55, 82, 68, 75, 90,
  ];

  const data = {
    labels: Array.from({ length: januaryData.length }, (_, i) => `${i + 1}`),
    datasets: [
      {
        data: januaryData,
      },
    ],
  };

  const graphStyle = {
    marginVertical: 8,
    borderRadius: 16,
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffff",
    backgroundGradientTo: "#ffff",
    color: (opacity = 1) => `rgba(0, 199, 102, ${opacity})`, // Green color
    labelColor: (opacity = 1) => `rgba(0, 199, 102, ${opacity})`, // Green color
    propsForDots: {
      r: "3", // Increase dot size for better visibility
      strokeWidth: "2",
      stroke: "#00C766", // Stylish green color
    },
    barPercentage: 0.5,
    horizontalLabelRotation: 45,
    fillShadowGradient: "#00C766", // Start color of the fill gradient
    fillShadowGradientOpacity: 0.6, // Opacity of the fill gradient
  };

  const dayWidth = wp("7%"); // Width of each day's column
  const screenWidth = dayWidth * januaryData.length;

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          marginBottom: hp("1%"),
          color: "#00C766",
          fontSize: 20,
        }}
      >
        Daily Generation Values
      </Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: wp("1%") }}
      >
        <BarChart
          style={[graphStyle, { width: screenWidth }]} // Dynamically set width based on number of days
          data={data}
          width={screenWidth}
          height={hp("70%")}
          yAxisLabel="kw"
          chartConfig={chartConfig}
          verticalLabelRotation={0}
        />
      </ScrollView>
    </View>
  );
};

export default DailyGraph;

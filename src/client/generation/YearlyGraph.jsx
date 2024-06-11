import React from "react";
import { View, Text, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const YearlyGraph = ({ years = [], yearlyData }) => {
  const data = {
    labels: years.map((year) => year.toString()), // Labels for each year
    datasets: [
      {
        data: yearlyData, // Yearly data provided as prop
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
      r: "6", // Increase dot size for better visibility
      strokeWidth: "2",
      stroke: "#00C766", // Stylish green color
    },
    barPercentage: 0.5,
    horizontalLabelRotation: 45,
    fillShadowGradient: "#00C766", // Start color of the fill gradient
    fillShadowGradientOpacity: 0.6, // Opacity of the fill gradient
  };

  const screenWidth = wp("100%");

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
        Yearly Generation Values
      </Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: wp("1%") }}
      >
        <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={hp("70%")}
          yAxisLabel="kw"
          chartConfig={chartConfig}
          verticalLabelRotation={90}
        />
      </ScrollView>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <YearlyGraph
        years={[2018, 2019, 2020, 2021]} // Sample years
        yearlyData={[1000, 1500, 2000, 1800]} // Sample yearly data
      />
    </View>
  );
};

export default App;

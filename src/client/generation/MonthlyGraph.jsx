// MonthlyGraph.js
import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { BarChart } from "react-native-chart-kit";

const MonthlyGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 60, 75, 35, 90, 55, 70] // Sample data for each month
      }
    ]
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
    fillShadowGradient: '#00C766', // Start color of the fill gradient
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
        Monthly Generation Values
      </Text>
      <ScrollView horizontal={true} contentContainerStyle={{ paddingHorizontal: wp('1%') }}>
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

export default MonthlyGraph;

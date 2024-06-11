import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DailyGraph from "./DailyGraph";
import MonthlyGraph from "./MonthlyGraph";
import YearlyGraph from "./YearlyGraph";

const options = [{ label: "Daily" }, { label: "Monthly" }, { label: "Yearly" }];

const TernaryComponent = ({ selectedOption }) =>
  selectedOption === "Monthly" ? (
    <MonthlyGraph />
  ) : selectedOption === "Yearly" ? (
    <YearlyGraph />
  ) : (
    <DailyGraph />
  );

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Daily"); // Set default option

  const handlePress = () => {
    setClicked(!clicked);
  };

  const handleOptionPress = (label) => {
    setSelectedOption(label);
    setClicked(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{selectedOption}</Text>
        {clicked ? null : (
          <Feather name="chevron-down" size={24} color="#00C766" />
        )}
      </TouchableOpacity>

      <View style={styles.graphContainer}>
        <TernaryComponent selectedOption={selectedOption} />
      </View>

      {clicked ? (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress(item.label)}
              >
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: "40%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: hp("1%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderColor: "#00C766",
    backgroundColor: "#E9FFEF",
  },
  buttonText: {
    fontWeight: "600",
  },
  dropdown: {
    position: "absolute",
    top: hp("40%"),
    elevation: 5,
    height: 150,
    alignSelf: "center",
    backgroundColor: "#E9FFEF",
    borderRadius: 10,
  },
  option: {
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#00C766",
    paddingHorizontal: 50,
  },
  optionText: {
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  graphContainer: {
    marginTop: hp("5%"),
    flex: 1,
  },
});

export default App;

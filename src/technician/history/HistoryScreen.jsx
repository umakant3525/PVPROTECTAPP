import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomButton from "../bottombutton/BottomButton";

const HistoryScreen = () => {
  const historyData = [
    {
      id: "h1",
      type: "Normal Visit",
      date: "11 Dec 2023",
      plantid: "plant1",
      plantname: "Plant1 Umakant",
      clientid: "clientid1",
      clientname: "Ruturaj client1",
      plantlocation: "Waraje, Pune",
    },
    {
      id: "h2",
      type: "Normal Visit",
      date: "12 Dec 2023",
      plantid: "plant2",
      plantname: "Plant2 Umakant",
      clientid: "clientid2",
      clientname: "Ruturaj client2",
      plantlocation: "Hadapsar, Pune",
    },
    {
      id: "h3",
      type: "Cleaning Visit",
      date: "13 Dec 2023",
      plantid: "plant3",
      plantname: "Plant3 Umakant",
      clientid: "clientid3",
      clientname: "Ruturaj client3",
      plantlocation: "Kothrud, Pune",
    },
    {
      id: "h4",
      type: "Cleaning Visit",
      date: "14 Dec 2023",
      plantid: "plant4",
      plantname: "Plant4 Umakant",
      clientid: "clientid4",
      clientname: "Ruturaj client4",
      plantlocation: "Aundh, Pune",
    },
    {
      id: "h5",
      type: "Normal Visit",
      date: "15 Dec 2023",
      plantid: "plant5",
      plantname: "Plant5 Umakant",
      clientid: "clientid5",
      clientname: "Ruturaj client5",
      plantlocation: "Baner, Pune",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text
          style={[
            styles.type,
            { color: item.type === "Normal Visit" ? "#00a651" : "#f57c00" },
          ]}
        >
          {item.type} ({item.date})
        </Text>
        {/* <View style={styles.rowContainer}>
          <MaterialCommunityIcons
            name="solar-panel-large"
            size={wp("4%")}
            color="#fbc02d" // Colorful solar panel icon
            style={styles.icon}
          />
          <Text style={styles.text}>
            PlantId: <Text style={styles.headtext}>{item.plantid}</Text>
          </Text>
        </View> */}
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons
            name="solar-panel-large"
            size={wp("4%")}
            color="#fbc02d" // Colorful solar panel icon
            style={styles.icon}
          />
          <Text style={styles.text}>
            PlantName: <Text style={styles.headtext}>{item.plantname}</Text>
          </Text>
        </View>
        {/* <View style={styles.rowContainer}>
          <MaterialCommunityIcons
            name="account"
            size={wp("4%")}
            color="#ff8a65" // Colorful account icon
            style={styles.icon}
          />
          <Text style={styles.text}>
            ClientId: <Text style={styles.headtext}>{item.clientid}</Text>
          </Text>
        </View> */}
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons
            name="account"
            size={wp("4%")}
            color="#ff8a65" // Colorful account icon
            style={styles.icon}
          />
          <Text style={styles.text}>
            ClientName: <Text style={styles.headtext}>{item.clientname}</Text>
          </Text>
        </View>
        {item.plantlocation && (
          <View style={styles.rowContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={wp("4%")}
              color="#F94144" // Colorful map marker icon
              style={styles.icon}
            />
            <Text style={styles.text}>
              PlantLocation:{" "}
              <Text style={styles.headtext}>{item.plantlocation}</Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Work History</Text>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <BottomButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("2%"),
    backgroundColor: "#fff",
  },
  title: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginTop: hp("5%"),
    textAlign: "center",
    marginVertical: hp("2%"),
  },
  listContainer: {
    paddingBottom: hp("2%"),
  },
  itemContainer: {
    padding: wp("4%"),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: wp("2%"),
    marginBottom: hp("1%"),
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: wp("2%"),
  },
  itemTextContainer: {
    flex: 1,
  },
  type: {
    fontSize: wp("4.5%"),
    marginBottom: hp("0.5%"),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("0.5%"),
  },
  headtext: {
    fontSize: wp("4%"),
    color: "#000",
    fontWeight: "600",
  },
  text: {
    fontSize: wp("4%"),
    color: "#555",
    marginLeft: wp("1%"),
  },
});

export default HistoryScreen;

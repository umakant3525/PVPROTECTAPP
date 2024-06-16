import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AddTechEmail = ({ contactData, onAddEmail, onClose }) => {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(contactData);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (text) => {
    setSearch(text);
    setIsSearching(text.length > 0);
    const filteredContacts = contactData.filter((item) => {
      return (
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.email.toLowerCase().includes(text.toLowerCase()) ||
        item.mobile.includes(text) ||
        item.id.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFilteredData(filteredContacts);
  };

  const onPressContact = (email) => {
    console.log("Selected contact email:", email);
    onAddEmail(email);
    onClose();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => onPressContact(item.email)}
      style={styles.itemContainer}
    >
      <View style={styles.left}>
        <Image
          source={{ uri: item.profileicon || "https://via.placeholder.com/50" }}
          style={styles.profileImage}
        />
        <Text style={styles.contactId}>{item.id}</Text>
      </View>
      <View style={styles.rightitemTextContainer}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactEmail}>
          <MaterialCommunityIcons
            name="email"
            size={wp("4%")}
            color="black"
          />{" "}
          {item.email}
        </Text>
      </View>
      <Ionicons name="add-sharp" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Technician Emails</Text>
      <View
        style={[
          styles.textinputcontainer,
          isSearching && styles.textinputcontainerActive,
        ]}
      >
        <TextInput
          style={[styles.textInput, isSearching && styles.textInputActive]}
          placeholder="Search your contact"
          value={search}
          onChangeText={handleSearch}
        />
        <Feather
          name="search"
          size={wp("6%")}
          color={isSearching ? "#00C766" : "black"}
        />
      </View>
      {filteredData.length === 0 ? (
        <Text style={styles.noResultsText}>No contacts found</Text>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
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
    marginTop: hp("2%"),
    textAlign: "center",
    marginVertical: hp("2%"),
  },
  textinputcontainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: wp("2%"),
    padding: wp("2%"),
    marginBottom: hp("2%"),
  },
  textinputcontainerActive: {
    borderColor: "gray",
  },
  textInput: {
    flex: 1,
    marginRight: wp("2%"),
    fontSize: wp("4%"),
  },
  textInputActive: {
    borderColor: "gray",
  },
  listContainer: {
    paddingBottom: hp("2%"),
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: wp("4%"),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: wp("2%"),
    marginBottom: hp("1%"),
    backgroundColor: "#fff",
  },
  left: {
    marginRight: wp("8%"),
  },
  profileImage: {
    width: wp("12%"),
    height: wp("12%"),
    borderRadius: wp("6%"),
    marginRight: wp("4%"),
  },
  rightitemTextContainer: {
    flex: 1,
  },
  contactName: {
    fontSize: wp("4.5%"),
  },
  contactEmail: {
    fontWeight: "bold",
    fontSize: wp("4%"),
    color: "#555",
    marginTop: hp("0.5%"),
  },
  contactId: {
    marginTop: wp("0.8%"),
    fontSize: wp("3%"),
    color: "#999",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: wp("4.5%"),
    color: "#F94144",
  },
});

export default AddTechEmail;

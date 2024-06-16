import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  View,
  Modal,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DateTimePicker from "@react-native-community/datetimepicker";
import AddTechEmail from "./AddTechEmail";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NoramlVisitFormComponent = () => {
  const [formData, setFormData] = useState({
    selectedDate: new Date(),
    inverterReading: "",
    inverterRemarks: "",
    importReading: "",
    exportReading: "",
    netReading: "",
    generationReading: "",
    technicianEmail: "",
  });
  const [emailList, setEmailList] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("No file choosen");

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const contactData = [
    {
      id: "contact1",
      name: "Ruturaj Deshmukh",
      email: "john@example.com",
      mobile: "7249780908",
      profileicon:
        "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    },
    {
      id: "contact2",
      name: "Umakant Shinde ",
      email: "umakant3525@gmail.com",
      mobile: "9529342940",
      profileicon:
        "https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg",
    },
    {
      id: "contact3",
      name: "Jineet Vishnav",
      email: "alice@example.com",
      mobile: "1112223333",
    },
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.selectedDate;
    setShowDatePicker(Platform.OS === "ios");
    setFormData({ ...formData, selectedDate: currentDate });
  };

  const addEmail = (email) => {
    if (email && !emailList.includes(email)) {
      setEmailList([...emailList, email]);
    }
  };

  const removeEmail = (email) => {
    setEmailList(emailList.filter((item) => item !== email));
  };

  const handleChooseFile = () => {
    setSelectedFileName("SampleFileName.png");
  };

  const PlaceholderImage = require("../../../../assets/visitform/PlaceholderImage.png");
  const choosefilebtn = require("../../../../assets/visitform/choosefilebtn.png");

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            style={styles.input}
            placeholder="Selected Date"
            value={formData.selectedDate.toDateString()}
            editable={false}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={formData.selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Inverter Reading/Status"
          value={formData.inverterReading}
          onChangeText={(text) => handleInputChange("inverterReading", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Inverter Remarks"
          value={formData.inverterRemarks}
          onChangeText={(text) => handleInputChange("inverterRemarks", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Import Reading"
          value={formData.importReading}
          onChangeText={(text) => handleInputChange("importReading", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Export Reading"
          value={formData.exportReading}
          onChangeText={(text) => handleInputChange("exportReading", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Net Reading"
          value={formData.netReading}
          onChangeText={(text) => handleInputChange("netReading", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Generation Reading"
          value={formData.generationReading}
          onChangeText={(text) => handleInputChange("generationReading", text)}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>
            <MaterialCommunityIcons name="email-plus" size={24} color="gray" /> Technician Email
          </Text>
        </TouchableOpacity>
        <View style={styles.emailList}>
          {emailList.map((email, index) => (
            <View key={index} style={styles.emailItem}>
              <Text>{email}</Text>
              <TouchableOpacity onPress={() => removeEmail(email)}>
                <Text style={styles.removeButton}>
                  <MaterialCommunityIcons
                    name="delete-forever-outline"
                    size={24}
                    color="#EF4343"
                  />
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Extra Remarks"
          value={formData.generationReading}
          onChangeText={(text) => handleInputChange("generationReading", text)}
        />

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadTitle}>Upload Client Signature Photo</Text>
          <View style={styles.uploadRow}>
            <Image source={PlaceholderImage} style={styles.placeholderImage} />
            <TouchableOpacity onPress={handleChooseFile}>
              <Image source={choosefilebtn} style={styles.chooseFileButton} />
              <Text>{selectedFileName}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadTitle}>Any Other Photo</Text>
          <View style={styles.uploadRow}>
            <Image source={PlaceholderImage} style={styles.placeholderImage} />
            <TouchableOpacity onPress={handleChooseFile}>
              <Image source={choosefilebtn} style={styles.chooseFileButton} />
              <Text>Filename.jpg</Text>
            </TouchableOpacity>
          </View>
        </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <AddTechEmail
          contactData={contactData}
          onAddEmail={addEmail}
          onClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

export default NoramlVisitFormComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  addButton: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  addButtonText: {
    color: "gray",
    fontSize: 16,
  },
  emailList: {
    marginVertical: 10,
  },
  emailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  removeButton: {
    color: "red",
  },
  uploadContainer: {
    marginVertical: 5,
  },
  uploadTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "gray",
  },
  uploadRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholderImage: {
    width: wp("25%"),
    height: wp("25%"),
  },
  chooseFileButton: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
});

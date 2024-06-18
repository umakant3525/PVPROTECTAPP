import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import useLocation from "../../common/location/useLocation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TechHeader = () => {
  const { city, errorMessage, loading } = useLocation();
  const profileicon = "https://cdn0.iconfinder.com/data/icons/occupation-001/64/engineer-professional-occupation-avatar-512.png";
  const loctionicon = require("../../../assets/clientdashboard/location.png");

  const [modalVisible, setModalVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(",", ""); // Removes the comma after the month

    setCurrentDate(formattedDate);
  }, []);

  const handleProfileClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
        <Image source={loctionicon} style={styles.loctionicon} />
          <View style={styles.textContainer}>
            <Text style={styles.currentDate}>{currentDate}</Text>
            <Text style={styles.city}>{loading ? "Loading..." : city}</Text>
            {errorMessage ? (
              <Text style={styles.error}>{errorMessage}</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.ownerInfoContainer}>
            <Text style={styles.ownerName}>Umakant Shinde</Text>
            <Text style={styles.ownerId}>technicianid1234</Text>
          </View>
          <TouchableOpacity onPress={handleProfileClick}>
            <Image source={{ uri: profileicon }} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Your Profile</Text>
            <View style={styles.modalContent}>
              <View style={styles.modalMainContent}>
                <Image source={{ uri: profileicon }} style={styles.profileIconModal} />
                <View style={styles.infoItem}>
                  <Text style={styles.modalTechName}>Umakant Shinde</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <MaterialCommunityIcons
                  name="account-box"
                  size={20}
                  color="#ff8a65"
                  style={styles.icon}
                />
                <Text style={styles.modalItem}>technicianid1234</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialCommunityIcons
                  name="phone"
                  size={20}
                  color="#ff8a65"
                  style={styles.icon}
                />
                <Text style={styles.modalItem}>1234567890</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialCommunityIcons
                  name="email"
                  size={20}
                  color="#ff8a65"
                  style={styles.icon}
                />
                <Text style={styles.modalItem}>umakant@example.com</Text>
              </View>
              <View style={styles.infoItem}>
                <MaterialCommunityIcons
                  name="wrench"
                  size={20}
                  color="#fbc02d"
                  style={styles.icon}
                />
                <Text style={styles.modalItem}>Expertise: Solar Panel Installation</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("5%"),
    marginBottom: hp("1%"),
    paddingHorizontal: wp("4%"),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loctionicon: {
    width: 45,
    height: 45,
  },
  textContainer: {
    marginLeft: wp("2%"),
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  error: {
    fontSize: wp("2%"),
    color: "red",
    marginTop: 1,
  },
  ownerInfoContainer: {
    marginLeft: wp("2%"),
    alignItems: "flex-start",
  },
  ownerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  ownerId: {
    fontSize: 10,
    color: "gray",
  },
  currentDate: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  },
  city: {
    fontSize: 10,
    color: "gray",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: wp("85%"),
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: "50",
    marginBottom: 15,
  },
  modalMainContent: {
    alignItems: "center",
  },
  modalContent: {
    alignItems: "left",
    paddingHorizontal: 10 
  },
  modalItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalTechName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  profileIconModal: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TechHeader;

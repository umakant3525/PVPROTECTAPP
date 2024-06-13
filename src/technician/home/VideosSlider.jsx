import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { WebView } from "react-native-webview";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const VideosSlider = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const videos = [
    {
      url: "https://www.youtube.com/embed/Epy3ivrG8ss",
      thumbnail: "https://img.youtube.com/vi/Epy3ivrG8ss/0.jpg",
    },
    {
      url: "https://www.youtube.com/embed/YLH-Ih8omjI",
      thumbnail: "https://img.youtube.com/vi/YLH-Ih8omjI/0.jpg",
    },
    {
      url: "https://www.youtube.com/embed/HqVFSNw_vy4",
      thumbnail: "https://img.youtube.com/vi/HqVFSNw_vy4/0.jpg",
    },
    {
      url: "https://www.youtube.com/embed/JYEVTDCCJoQ",
      thumbnail: "https://img.youtube.com/vi/JYEVTDCCJoQ/0.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=KBIq11mNB0I&pp=ygUtZGlzaCBwYXRhbmkgc29uZ3Mgd2l0aCBiZXN0IHRodW1ibmFpbCB5b3V0dWJl",
      thumbnail: "https://img.youtube.com/vi/KBIq11mNB0I/0.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=KBIq11mNB0I&pp=ygUtZGlzaCBwYXRhbmkgc29uZ3Mgd2l0aCBiZXN0IHRodW1ibmFpbCB5b3V0dWJl",
      thumbnail: "https://img.youtube.com/vi/KBIq11mNB0I/0.jpg",
    },

    {
      url: "https://www.youtube.com/watch?v=KBIq11mNB0I&pp=ygUtZGlzaCBwYXRhbmkgc29uZ3Mgd2l0aCBiZXN0IHRodW1ibmFpbCB5b3V0dWJl",
      thumbnail: "https://img.youtube.com/vi/KBIq11mNB0I/0.jpg",
    },

    {
      url: "https://www.youtube.com/watch?v=KBIq11mNB0I&pp=ygUtZGlzaCBwYXRhbmkgc29uZ3Mgd2l0aCBiZXN0IHRodW1ibmFpbCB5b3V0dWJl",
      thumbnail: "https://img.youtube.com/vi/KBIq11mNB0I/0.jpg",
    },
  ];

  const handleThumbnailPress = (url) => {
    setCurrentVideo(url);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watch These Videos Before You Go to Work</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {videos.map((video, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleThumbnailPress(video.url)}
          >
            <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <WebView source={{ uri: currentVideo }} style={styles.video} />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp("1%"),
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: hp("1%"),
    marginHorizontal : wp("4%")
  },
  thumbnail: {
    borderRadius: 8,
    width: wp("40%"),
    height: 80,
    marginHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  video: {
    borderRadius: 25,
    width: wp("95%"),
    height: wp("80%"),
    marginVertical: hp("10%"),
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  closeButtonText: {
    color: "#000",
    fontSize: 12,
  },
});

export default VideosSlider;

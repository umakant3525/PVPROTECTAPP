import React from 'react';
import { Modal, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CleaningPopUp = ({ cycle, onClose, visible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <MaterialCommunityIcons name="close-circle-outline" size={24} color="#00C766" />
          </TouchableOpacity>
          <Text style={styles.title}> Cycle No. {cycle.cycleNumber}</Text>
          <View style={styles.textRow}>
            <Text style={styles.boldText}>Cleaned By: </Text>
            <Text style={styles.smoothText}>{cycle.doneBy}</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.boldText}>Date: </Text>
            <Text style={styles.smoothText}>{cycle.date}</Text>
          </View>
          <Text style={styles.content}>{cycle.description}</Text>

          <ScrollView horizontal={true} style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
            {cycle.workImages.map((image, index) => (
              <Image
                key={index}
                style={styles.image}
                source={{ uri: image }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CleaningPopUp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Increased opacity
  },
  modalView: {
    width: wp('90%'),
    backgroundColor: '#E4FFEE',
    borderRadius: 25,
    padding: 15,
    borderColor: '#00C766',
    borderWidth: 0.5,
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: hp('1%'),
    right: wp('1%'),
  },
  title: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    textAlign: 'center'
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
  boldText: {
    fontSize: wp('4%'),
    fontWeight: '500',
    textAlign: 'center',
  },
  smoothText: {
    fontSize: wp('5%'),
    fontWeight: 'normal',
    color: '#555',
    textAlign: 'center',
  },
  scrollView: {
    marginTop: hp('2%'),
    maxHeight: hp('30%'),
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('90%'),
    height: 150,
    marginHorizontal: wp('2%'),
    borderRadius: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
});

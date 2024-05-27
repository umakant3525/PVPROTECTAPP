import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CleaningBottomSheet = ({cycle}) => {
 
  return (
    <View style={styles.bottomSheet}>
      <Text style={styles.title}> Cycle No. {cycle.cycleNumber}</Text>
      <View style={styles.textRow}>
        <Text style={styles.boldText}>Cleaned By: </Text>
        <Text style={styles.smoothText}>{cycle.cleanedBy}</Text>
      </View>
      <View style={styles.textRow}>
        <Text style={styles.boldText}>Date: </Text>
        <Text style={styles.smoothText}>{cycle.date}</Text>
      </View>
      <View style={styles.Row}>
        <Text style={styles.boldText}>Work image Proffs </Text>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {cycle.workImages.map((image, index) => (
          <Image
            key={index}
            style={styles.image}
            source={{ uri: image }}
          />
        ))}
      </ScrollView>
      <Text style={styles.content}>{cycle.content}</Text>
    </View>
  );
};

export default CleaningBottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: hp('50%'), // Adjust height as needed
    backgroundColor: '#E4FFEE', 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20, // Adjust padding as needed
    borderColor: '#00C766', // Border color
    borderWidth: 0.5, // Border width
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    textAlign: 'center'
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  boldText: {
    fontSize : wp('5%'),
    fontWeight: 'bold',
  },
  smoothText: {
    fontSize : wp('5%'),
    fontWeight: 'normal',
    color: '#555', // Smooth text color
  },
  scrollView: {
    marginTop: hp('5%'),
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('80%'), // Fixed width for horizontal scrolling
    height: 150,
    marginHorizontal : wp('2%'),
    borderRadius: 10, // Adding border radius for images
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
});

import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const pdficon = require("/home/umakant/Desktop/my-app/assets/reports/pdf.png");

const reportData = [
  { id: '1', title: 'Finance Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '2', title: 'Annual Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '3', title: 'Quarterly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '4', title: 'Monthly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '5', title: 'Finance Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '6', title: 'Annual Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '7', title: 'Quarterly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '8', title: 'Monthly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '9', title: 'Finance Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '10', title: 'Annual Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '11', title: 'Quarterly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '12', title: 'Monthly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '13', title: 'Finance Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '14', title: 'Annual Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '15', title: 'Quarterly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '16', title: 'Monthly Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" },
  { id: '17', title: 'Finance Report', date: '09.01.24 at 10:57', link: "https://drive.google.com/file/d/1XH1jFIc71H6b_DjyEe0016Xh3LozYk7f/view?usp=drive_link" }
];

const ReportsScreen = () => {
  const handleDownload = (link) => {
    Linking.openURL(link);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          {reportData.map((report, index) => (
            <View key={report.id} style={styles.reportItem}>
              <Image source={pdficon} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.reportTitle}>{index + 1}. {report.title}</Text>
                <View style={styles.subTextContainer}>
                  <TouchableOpacity onPress={() => handleDownload(report.link)}>
                    <Feather name="download" size={16} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.date}>{report.date}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

    </SafeAreaView>
  );
}

export default ReportsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.2,
    borderBottomColor: '#dcdcdc',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: wp('15%'),
    height: wp('15%'),
    marginRight: wp('5%'),
  },
  textContainer: {
    flex: 1,
  },
  reportTitle: {
    fontSize: hp('2.2%'),
    fontWeight: '500'  },
  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  date: {
    fontSize: hp('1.8%'),
    color: '#555',
    marginLeft: wp('3%'),
  },
});

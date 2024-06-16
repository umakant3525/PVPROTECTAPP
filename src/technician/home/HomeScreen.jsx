import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BottomButton from "../bottombutton/BottomButton";
import TechHeader from "./TechHeader";
import TechCarousel from "./TechCarousel";
import VideosSlider from "./VideosSlider";
import RuleBox from "./RuleBox";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TechHeader />
        <TechCarousel />
        <VideosSlider />
        <View style={styles.rulecontainer}>
          <RuleBox />
        </View>
      </ScrollView>
      <BottomButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rulecontainer: {
    marginBottom: hp("10%"),
  },
});

export default HomeScreen;

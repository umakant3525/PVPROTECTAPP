import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomButton from '../bottombutton/BottomButton';
import TechHeader from './TechHeader';
import TechCarousel from './TechCarousel';
import VideosSlider from './VideosSlider';
import RuleBox from './RuleBox';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TechHeader/>
      <ScrollView> 
      <TechCarousel/>
      <VideosSlider/>
      <RuleBox/>
      </ScrollView>
      <BottomButton/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;

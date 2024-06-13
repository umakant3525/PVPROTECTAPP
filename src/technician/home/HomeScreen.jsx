import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomButton from '../bottombutton/BottomButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      {/* Your main content here */}
      <BottomButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

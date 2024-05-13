import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item, navigation }) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 0.5,
    width: "100%",
  },
  content: {
    flex: 0.2,
    alignItems: "center",
     paddingHorizontal: wp('5%')
      },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "hsla(0, 0%, 0%, 1)",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    marginVertical: 12,
    color: "hsla(0, 0%, 0%, 0.4)",
    textAlign: "center",
  },
});

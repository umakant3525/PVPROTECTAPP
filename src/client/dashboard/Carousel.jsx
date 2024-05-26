import React, { useRef } from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View, Animated } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

const Carousel = () => {
  const images = [
    require("../../../assets/clientdashboard/1.jpg"),
    require("../../../assets/clientdashboard/2.jpg"),
    require("../../../assets/clientdashboard/3.jpg"),
    require("../../../assets/clientdashboard/4.jpg"),
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
      <Pagination data={images} scrollX={scrollX} />
    </View>
  );
};

const Pagination = ({ data, scrollX }) => {
  const position = Animated.divide(scrollX, width);

  return (
    <View style={styles.paginationContainer}>
      {data.map((_, idx) => {
        const opacity = position.interpolate({
          inputRange: [idx - 1, idx, idx + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, { opacity }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp('2%'),
  },
  paginationContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00C766',
    marginHorizontal: 4,
  },
  image: {
    borderRadius: 20,
    width: wp("97%"),
    height: 200,
    marginHorizontal: 5
  },
});

export default Carousel;

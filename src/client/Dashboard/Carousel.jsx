import React, { useRef } from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View, Animated } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

const Carousel = () => {
  const images = [
    require("../../../assets/carousel/1.jpg"),
    require("../../../assets/carousel/2.jpg"),
    require("../../../assets/carousel/3.jpg"),
    require("../../../assets/carousel/4.jpg"),
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
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotSize = scrollX.interpolate({
          inputRange,
          outputRange: [6, 15, 6],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#000', '#00C766', '#000'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              { width: dotSize, height: dotSize, opacity, backgroundColor },
            ]}
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
    top: 10,
  },
  dot: {
    borderRadius: 7.5,
    marginHorizontal: 5,
  },
  image: {
    borderRadius: 20,
    width: wp("97%"),
    height: 200,
    marginHorizontal: 5
  },
});

export default Carousel;

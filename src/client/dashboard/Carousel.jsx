import React, { useRef, useEffect } from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View, Animated } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

const Carousel = () => {
  const images = [
    require("../../../assets/clientdashboard/Carousel/1.jpg"),
    require("../../../assets/clientdashboard/Carousel/2.jpg"),
    require("../../../assets/clientdashboard/Carousel/3.jpg"),
    require("../../../assets/clientdashboard/Carousel/4.jpg"),
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start automatic scrolling
    intervalRef.current = setInterval(() => {
      scrollViewRef.current.scrollTo({
        x: (scrollX._value + width) % (width * images.length),
        animated: true,
      });
    }, 3000); // Change slide every 3 seconds

    return () => {
      // Clear interval on component unmount
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
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

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
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
              { width: dotWidth, opacity, backgroundColor },
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
    marginTop: hp('2%'),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 20,
    width: wp("97%"),
    height: 200,
    marginHorizontal: 5
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
    backgroundColor: '#000)',
  },
});

export default Carousel;

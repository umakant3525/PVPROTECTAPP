import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import Slides from "./data";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import TowardsRoleButton from "./TowardsRoleButton";

const AboutSliderScreen = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: (index + 1) % Slides.length,
          animated: true,
        });
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll();
  }, [index]);

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ref={flatListRef}
        onTouchStart={stopAutoScroll}
        onTouchEnd={startAutoScroll}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <TowardsRoleButton />
    </View>
  );
};

export default AboutSliderScreen;

const styles = StyleSheet.create({});

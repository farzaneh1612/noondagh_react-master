import React, {useRef} from 'react';
import {View, Animated, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {
  baseSidesSpace,
  baseWidth,
  DEVICE_WIDTH,
  largeRadius,
  mediumRadius,
  mediumShadow,
} from '../../constants';
import {setShadow, setSize} from '../../functions';
import {colors} from '../../styles';
import Image from './Image';

export default function XSwiper({
  mainPage,
  items, // an array of items to show
  local, // for local images
  width, // slide show width (width of each item)
  height, // slide show height (height of each item)
  imageStyle,
  itemWrapperStyle, // styles for item container
  dot, // dots properties - this is an object that contain: {color: string, width: number, height: number }
  activeDot, // active dot properties that like dot prop
  dotsSpace, // space between dots
  dotsWrapperStyle, // styles for dots container
  onPress, // onPress event for each item
  imageKeyName, // if you want to show an array of object that contain images, you must set the imageKeyName prop that is key name of images in objects
  renderItem, // render custom components for each item
  activeOpacity, // activeOpacity for item container touchable
  imageFitContent, // images fit style
}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const thisWidth = width || DEVICE_WIDTH;
  const thisHeight = height || baseWidth * 0.5 + baseSidesSpace * 1.5;

  const dotInfo = {
    color: '#00000055',
    width: setSize(10),
    height: setSize(10),
    ...dot,
  };
  const activeDotInfo = {
    color: colors.baseThemeColor,
    width: setSize(20),
    height: setSize(10),
    ...activeDot,
  };
  const spaceBetweenDots = dotsSpace || 0;

  const lastIndex = items.length - 1;

  const dotsWidthAnim = items.map((_, i) => {
    if (i === 0) {
      return scrollX.interpolate({
        inputRange: [0, thisWidth, thisWidth],
        outputRange: [activeDotInfo.width, dotInfo.width, dotInfo.width],
      });
    }

    if (i === lastIndex) {
      return scrollX.interpolate({
        inputRange: [0, (i - 1) * thisWidth, i * thisWidth],
        outputRange: [dotInfo.width, dotInfo.width, activeDotInfo.width],
      });
    }

    return scrollX.interpolate({
      inputRange: [
        0,
        (i - 1) * thisWidth,
        i * thisWidth,
        (i + 1) * thisWidth,
        (i + 1) * thisWidth,
      ],
      outputRange: [
        dotInfo.width,
        dotInfo.width,
        activeDotInfo.width,
        dotInfo.width,
        dotInfo.width,
      ],
    });
  });

  const dotsHeightAnim = items.map((_, i) => {
    if (i === 0) {
      return scrollX.interpolate({
        inputRange: [0, thisWidth, thisWidth],
        outputRange: [activeDotInfo.height, dotInfo.height, dotInfo.height],
      });
    }

    if (i === lastIndex) {
      return scrollX.interpolate({
        inputRange: [0, (i - 1) * thisWidth, i * thisWidth],
        outputRange: [dotInfo.height, dotInfo.height, activeDotInfo.height],
      });
    }

    return scrollX.interpolate({
      inputRange: [
        0,
        (i - 1) * thisWidth,
        i * thisWidth,
        (i + 1) * thisWidth,
        (i + 1) * thisWidth,
      ],
      outputRange: [
        dotInfo.height,
        dotInfo.height,
        activeDotInfo.height,
        dotInfo.height,
        dotInfo.height,
      ],
    });
  });

  const dotsBgColorAnim = items.map((_, i) => {
    if (i === 0) {
      return scrollX.interpolate({
        inputRange: [0, thisWidth, thisWidth],
        outputRange: [activeDotInfo.color, dotInfo.color, dotInfo.color],
      });
    }

    if (i === lastIndex) {
      return scrollX.interpolate({
        inputRange: [0, (i - 1) * thisWidth, i * thisWidth],
        outputRange: [dotInfo.color, dotInfo.color, activeDotInfo.color],
      });
    }

    return scrollX.interpolate({
      inputRange: [
        0,
        (i - 1) * thisWidth,
        i * thisWidth,
        (i + 1) * thisWidth,
        (i + 1) * thisWidth,
      ],
      outputRange: [
        dotInfo.color,
        dotInfo.color,
        activeDotInfo.color,
        dotInfo.color,
        dotInfo.color,
      ],
    });
  });

  const imagesStyle = imageFitContent
    ? {
        width: '100%',
        height: '100%',
      }
    : {
        width: baseWidth,
        height: mainPage ? baseWidth * 0.5 : baseWidth * 0.532,
        marginVertical: baseSidesSpace / 2,
        ...setShadow(mediumShadow),
      };

  const styles = StyleSheet.create({
    wrapper: {
      width: thisWidth,
      height: thisHeight,
      alignSelf: 'center',
      backgroundColor: 'transparent',
    },

    dotsWrapper: {
      flexDirection: 'row',
      alignSelf: 'center',
      bottom: setSize(30),
      position: 'absolute',
      zIndex: 2,
      ...dotsWrapperStyle,
    },

    dotWrapper: {
      width: activeDotInfo.width,
      height: activeDotInfo.height,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: spaceBetweenDots,
    },

    dot: {
      height: 10,
      borderRadius: 10,
      marginHorizontal: 10,
    },

    image: {
      alignSelf: 'center',
      ...imagesStyle,
    },
  });

  return (
    <View style={styles.wrapper}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index + ''}
            activeOpacity={activeOpacity || 1}
            onPress={() => onPress && onPress(item)}
            style={{...itemWrapperStyle, width: thisWidth}}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <Image
                source={
                  local
                    ? item[`${imageKeyName}`] || item
                    : {uri: item[`${imageKeyName}`]}
                }
                style={[
                  ...styles.image,
                  ...imageStyle,
                  {borderRadius: mainPage ? largeRadius : mediumRadius},
                ]}
                resizeMode={FastImage.resizeMode.stretch}
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.dotsWrapper}>
        {items.map((_, i) => (
          <View key={i + ''} style={styles.dotWrapper}>
            <Animated.View
              style={{
                ...styles.dot,
                backgroundColor: dotsBgColorAnim[i],
                width: dotsWidthAnim[i],
                height: dotsHeightAnim[i],
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {specificSize} from '../functions/styleFuncs';
import FastImage from 'react-native-fast-image';
import {XText, XBadge} from './XPublics';
import {colors} from '../styles/publicStyles';
import {navigate, push} from '../functions/navFuncs';

export default function BoxProduct({item, index, width}) {
  const box = useRef();

  const onPress = () => {
    box.current.measure((x, y, w, h, px, py) => {
      navigate('ProductDetails', {
        top: py,
        left: px,
        imageSrc: item.imageSrc,
        imgBgColor: index % 2 === 0 ? colors.boxColor1 : colors.boxColor2,
      });
    });
    setTimeout(() => {
      box.current.setNativeProps({opacity: 0});
    }, 500);
    setTimeout(() => {
      box.current.setNativeProps({opacity: 1});
    }, 1500);
  };

  const outerWrapperWidth = specificSize(180, 200, 230);
  const innerWrapperWidth = specificSize(165, 183, 210);
  const innerWrapperHeight = specificSize(230, 260, 295);
  const imageSectionWidth = specificSize(140, 166, 185);
  const infoSectionRadius = specificSize(20, 22, 25);
  const titleHeight = specificSize(30, 35, 40);

  const listStyles = StyleSheet.create({
    outerWrapper: {width: width || outerWrapperWidth},

    innerWrapper: {
      width: innerWrapperWidth,
      height: innerWrapperHeight,
      justifyContent: 'flex-end',
    },

    infoSection: {
      width: innerWrapperWidth,
      height: innerWrapperWidth,
      borderRadius: infoSectionRadius,
      justifyContent: 'flex-end',
      paddingBottom: 3,
      paddingHorizontal: 7,
      borderWidth: 2,
      borderColor: '#f6f6f6',
    },

    imageWrapper: {
      width: imageSectionWidth,
      height: imageSectionWidth,
      alignSelf: 'center',
      top: 0,
      transform: [{scaleX: -1}],
      zIndex: 2,
      position: 'absolute',
    },

    image: {
      width: imageSectionWidth,
      height: imageSectionWidth,
      alignSelf: 'center',
      top: 0,
      transform: [{scaleX: -1}],
      zIndex: 2,
      position: 'absolute',
    },

    titleWrapper: {
      height: titleHeight,
      justifyContent: 'center',
    },

    priceSectionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  return (
    <View style={listStyles.outerWrapper}>
      <TouchableOpacity
        activeOpacity={0.95}
        style={listStyles.innerWrapper}
        onPress={onPress}
        delayPressIn={0}
        delayPressOut={0}>
        <FastImage
          ref={box}
          style={listStyles.image}
          source={item.imageSrc}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View
          style={{
            ...listStyles.infoSection,
            backgroundColor:
              index % 2 === 0 ? colors.boxColor1 : colors.boxColor2,
          }}>
          <View style={listStyles.titleWrapper}>
            <XText
              bold
              small
              titleStyle
              numberOfLines={1}
              color={colors.boxTitleColor}>
              {item.name}
            </XText>
          </View>

          <View style={listStyles.priceSectionWrapper}>
            {item.discountPercent && (
              <XBadge
                label={{text: item.discountPercent}}
                rightInnerLabel={{text: '%', size: 12, color: '#fff'}}
                radius={30}
              />
            )}
            <View>
              {item.price && (
                <XText color={colors.priceColor} small lineHeight={20}>
                  <XText
                    color={colors.priceColor}
                    bold
                    h3
                    priceFormat
                    lineHeight={20}>
                    {item.price}
                  </XText>{' '}
                  تومان
                </XText>
              )}
              {item.prevPrice && (
                <XText muted priceDecorator small priceFormat lineHeight={20}>
                  {item.prevPrice}
                </XText>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

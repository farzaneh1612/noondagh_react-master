import React, {useRef, useEffect, useState} from 'react';
import {View, Animated, StyleSheet, SafeAreaView} from 'react-native';
import {
  XText,
  XBadge,
  XButton,
  XContainer,
  XSafeContainer,
} from '../components/XPublics';
import XSwiper from '../components/XSwiper';
import FastImage from 'react-native-fast-image';
import {DEVICE_WIDTH} from '../constants/constants';
import {specificSize} from '../functions/styleFuncs';
import {colors, Separator} from '../styles/publicStyles';
import {pop} from '../functions/navFuncs';
import * as Animatable from 'react-native-animatable';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const txt =
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.';
const extraTxt =
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که ';

const HEADER_HEIGHT = specificSize(60, 65, 70);
const IMAGE_SCALE = specificSize(1.6, 2.1, 2.5);

var timer = null;

export default function ProductDetails(props) {
  // route params
  const {top, left, imageSrc, imgBgColor} = props.route.params;

  const testImg = [imageSrc, imageSrc, imageSrc, imageSrc];

  // refs
  const swiperOpacity = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  // stats
  const [imgZIndex, setImgZIndex] = useState(2);
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(1);

  // methods
  const addOne = () => {
    setCount((count) => count + 1);
    timer = setTimeout(() => {
      addOne();
    }, 150);
  };

  const removeOne = () => {
    if (count === 1) {
      stopTimer();
      setAdded(false);
    } else {
      setCount((count) => (count > 1 ? count - 1 : 1));
      timer = setTimeout(() => {
        removeOne();
      }, 150);
    }
  };

  const stopTimer = () => {
    clearTimeout(timer);
  };

  const showSwiper = () => {
    Animated.timing(swiperOpacity, {
      toValue: 1,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  // lifecycles
  useEffect(() => {
    setTimeout(showSwiper, 500);
    setTimeout(() => setImgZIndex(-1), 600);
  });

  // animations parameters
  const imageTranslate = {
    0: {
      scale: 1,
      top,
      left,
      scaleX: -1,
    },
    1: {
      scaleX: -1,
      scale: IMAGE_SCALE,
      top: DEVICE_WIDTH * 0.4 - 70,
      left: DEVICE_WIDTH / 2 - 70,
    },
  };

  const headerBgColor = scrollY.interpolate({
    inputRange: [
      0,
      DEVICE_WIDTH * 0.4,
      DEVICE_WIDTH * 0.4,
      DEVICE_WIDTH * 0.41,
      DEVICE_WIDTH * 0.8,
    ],
    outputRange: ['transparent', 'transparent', '#ffffff99', '#fff', '#fff'],
    extrapolate: 'clamp',
  });

  const headerShadow = scrollY.interpolate({
    inputRange: [
      0,
      DEVICE_WIDTH * 0.4,
      DEVICE_WIDTH * 0.4,
      DEVICE_WIDTH * 0.5,
      DEVICE_WIDTH * 0.8,
    ],
    outputRange: [0, 0, 7, 9, 10],
    extrapolate: 'clamp',
  });

  const contentTop = scrollY.interpolate({
    inputRange: [0, DEVICE_WIDTH * 0.8, DEVICE_WIDTH * 0.9],
    outputRange: [-20, -DEVICE_WIDTH * 0.6, -DEVICE_WIDTH * 0.6],
  });

  const scrollMarginBottom = scrollY.interpolate({
    inputRange: [0, DEVICE_WIDTH * 0.8, DEVICE_WIDTH * 0.9],
    outputRange: [-10, -DEVICE_WIDTH * 0.5, -DEVICE_WIDTH * 0.5],
  });

  return (
    <>
      <XSafeContainer>
        <XContainer>
          {/** absolute image */}
          <Animatable.View
            easing="ease-in-out-sine"
            animation={imageTranslate}
            duration={400}
            style={{...styles.absoluteImage, zIndex: imgZIndex}}>
            <FastImage source={imageSrc} style={styles.image} />
          </Animatable.View>
          {/** all content wrapper */}
          <Animatable.View
            animation="fadeIn"
            duration={100}
            style={styles.wrapper}>
            {/** header */}
            <Animated.View
              style={{
                ...styles.header,
                backgroundColor: headerBgColor,
                elevation: headerShadow,
              }}>
              <XButton
                onPress={() => pop()}
                bgColor="transparent"
                radius={HEADER_HEIGHT}
                circle
                iconLeft={{
                  type: 'entypo',
                  name: 'chevron-left',
                  size: 29,
                  color: colors.baseIconColor,
                }}
              />
              <Separator />
              <XButton
                bgColor="transparent"
                radius={HEADER_HEIGHT}
                circle
                iconLeft={{
                  type: 'entypo',
                  name: 'share',
                  size: 25,
                  color: colors.baseIconColor,
                }}
              />
              <XButton
                bgColor="transparent"
                radius={HEADER_HEIGHT}
                circle
                iconLeft={{
                  type: 'entypo',
                  name: 'heart-outlined',
                  size: 27,
                  color: colors.baseIconColor,
                }}
              />
            </Animated.View>

            {/** image and content scroll */}
            <Animated.ScrollView
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false},
              )}
              showsVerticalScrollIndicator={false}
              style={{marginBottom: scrollMarginBottom}}>
              {/** image and swiper */}
              <View
                style={{...styles.swiperWrapper, backgroundColor: imgBgColor}}>
                <Animated.View
                  style={{...styles.wrapper, opacity: swiperOpacity}}>
                  <XSwiper
                    items={testImg}
                    imageStyle={{
                      ...styles.swiperImage,
                      transform: [{scale: IMAGE_SCALE}, {scaleX: -1}],
                    }}
                  />
                </Animated.View>
              </View>

              {/** content */}
              <Animated.View style={{...styles.content, top: contentTop}}>
                {/** discount section */}
                <View style={styles.titleWrapper}>
                  <XText light smaller color={colors.priceColor}>
                    <XText color={colors.priceColor} priceFormat bold h2>
                      1500
                    </XText>{' '}
                    تومان 
                  </XText>
                  <Separator />
                  <XText bold h2>
                    نان سنگک سنتی ۷۵۰ گرم
                  </XText>
                </View>
                {/** discount section */}
                <View style={styles.discountWrapper}>
                  <XText priceFormat priceDecorator muted light>
                    2000
                  </XText>
                  <XBadge
                    label={{text: 5, small: true}}
                    rightInnerLabel={{text: '%', size: 12, color: '#fff'}}
                    radius={specificSize(25, 27, 30)}
                    style={styles.badge}
                  />
                </View>
                {/** describes section (webview) */}
                <View
                  style={{
                    marginTop: specificSize(5, 8, 11),
                    // minHeight: DEVICE_HEIGHT - DEVICE_WIDTH * 0.7,
                  }}>
                  <XText textAlign="justify">
                    {txt}
                    <XText color="transparent">{extraTxt}</XText>
                  </XText>
                  {/* <WebView
                    lineHeight={specificSize(2.8, 2.8, 2)}
                    fontSize={specificSize('14px', '16px', '18px')}
                    body={`<p>${txt}<p style="height: ${
                      DEVICE_WIDTH * 0.15
                    }px"></p></p>`}
                  /> */}
                </View>
              </Animated.View>
            </Animated.ScrollView>
            {/** footer section (counter and price) */}
            <View style={styles.footer}>
              <XText color={colors.priceColor} small>
                <XText priceFormat bold h1 color={colors.priceColor}>
                  3400
                </XText>
                تومان
              </XText>

              <View
                style={{
                  width: specificSize(200, 250, 300),
                }}>
                {!added ? (
                  <XButton
                    onPress={() => setAdded(true)}
                    height={specificSize(45, 50, 55)}
                    block
                    label={{text: 'افزودن به سبد خرید', color: '#fff'}}
                    bgColor={colors.priceColor}
                    radius={10}
                    iconRight={{
                      type: 'ant-design',
                      name: 'shoppingcart',
                      color: '#fff',
                      size: 32,
                    }}
                  />
                ) : (
                  <View style={styles.counterWrapper}>
                    <XButton
                      btnType="ios"
                      onPressIn={removeOne}
                      onPressOut={stopTimer}
                      shadow={5}
                      iconLeft={{
                        type: 'entypo',
                        name: 'minus',
                        size: 22,
                      }}
                      notMargin
                      circle
                      radius={specificSize(35, 40, 45)}
                    />
                    <View style={styles.count}>
                      <XText bold h1>
                        {count}
                      </XText>
                    </View>
                    <XButton
                      btnType="ios"
                      onPressIn={addOne}
                      onPressOut={stopTimer}
                      shadow={5}
                      iconLeft={{
                        type: 'entypo',
                        name: 'plus',
                        size: 22,
                      }}
                      notMargin
                      circle
                      radius={specificSize(35, 40, 45)}
                    />
                  </View>
                )}
              </View>
            </View>
          </Animatable.View>
        </XContainer>
      </XSafeContainer>
      <SafeAreaView style={styles.bottomSafeArea} />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {backgroundColor: 'transparent', flex: 1},

  absoluteImage: {
    width: 140,
    height: 140,
    position: 'absolute',
  },

  image: {width: '100%', height: '100%'},

  swiperImage: {
    width: 140,
    height: 140,
  },

  titleWrapper: {
    flexDirection: 'row',
    minHeight: specificSize(65, 75, 85),
    alignItems: 'center',
  },

  discountWrapper: {
    flexDirection: 'row',
    marginTop: specificSize(-20, -25, -30),
  },

  badge: {marginLeft: 10},

  text: {
    textAlign: 'justify',
    paddingHorizontal: 10,
    direction: 'rtl',
    marginTop: 10,
  },

  content: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
    top: -20,
    backgroundColor: '#fff',
    paddingHorizontal: specificSize(10, 13, 17),
  },

  header: {
    width: '100%',
    height: HEADER_HEIGHT,
    position: 'absolute',
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
  },

  footer: {
    height: getBottomSpace() + specificSize(80, 90, 100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: specificSize(20, 25, 30),
    borderTopRightRadius: specificSize(20, 25, 30),
    alignItems: 'center',
    paddingHorizontal: specificSize(10, 13, 17),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  swiperWrapper: {
    width: '100%',
    height: DEVICE_WIDTH * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  count: {
    alignItems: 'center',
    justifyContent: 'center',
    width: specificSize(50, 70, 80),
    paddingTop: 5,
  },

  bottomSafeArea: {flex: 0, backgroundColor: '#f8f8f8'},
});

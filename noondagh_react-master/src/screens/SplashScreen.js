import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

import {XCenterContainer, XSafeContainer, XText} from '../components/XPublics';
import {specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';
import {StackActions} from '@react-navigation/native';

import FastImage from 'react-native-fast-image';

export default function SplashScreen(props) {
  const anim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animate = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.out(Easing.poly(4)),
      useNativeDriver: true,
    }).start(() => fadeIn());
  };

  const scale = anim.interpolate({
    inputRange: [0, 0.2, 0.5, 0.7, 0.9, 1],
    outputRange: [0, 0.2, 0.5, 0.7, 1, 1.2],
  });

  useEffect(() => {
    animate();
  }, []);

  const startHome = () => {
    setTimeout(() => {
      props.navigation.dispatch(StackActions.replace('Home'));
    }, 4000);
  };
  return (
    <XSafeContainer bgColor={'#634800'}>
      <XCenterContainer style={{backgroundColor: '#634800'}}>
        <Animated.View // Special animatable View
          style={{
            backgroundColor: 'transparent',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{scale}],
          }}>
          <FastImage
            style={{
              width: specificSize(218, 350, 400),
              height: specificSize(127),
            }}
            source={require('../assets/images/bakery.png')}
          />
        </Animated.View>

        <Animated.View
          onAnimationEnd={startHome()}
          style={{
            opacity: fadeAnim,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <XText bold style={{paddingTop: 20}} size={30} color={'#f7c868'}>
            {' '}
            <XText
              bold
              size={30}
              color={colors.baseBgColor}
              textAlign={'center'}>
              نان{' '}
            </XText>
            داغ
          </XText>
          <XText
            h3
            light
            color={colors.baseBgColor}
            style={{
              alignSelf: 'center',
              marginHorizontal: 5,
              paddingTop: 10,
            }}
            textAlign={'center'}>
            سفارش انلاین انواع نان
          </XText>
        </Animated.View>
      </XCenterContainer>
    </XSafeContainer>
  );
}

import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {XText, XButton} from './XPublics';
import FastImage from 'react-native-fast-image';
import {colors} from '../styles/publicStyles';
import {specificSize} from '../functions/styleFuncs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigate} from '../functions/navFuncs';
import {DEVICE_WIDTH} from '../constants/constants';
import {getData, storeData} from '../functions/functions';

import ToolTipContext from '../stores/TooltipContext';
import Tooltip from './Tooltip';

let timer = null;
export default function ShoppingListComponent(props) {
  const {
    onPress,
    imageSrc,
    title,
    price,
    count,
    index,
    ChangeCountCustom,
    maxCount,
  } = props;
  const [countCustom, setCountCustom] = useState(props.count);
  const [increase, setIncrease] = useState(false);
  const [decrease, setDecrease] = useState(props.count === 1 ? true : false);
  const [highNumber, setHighNumber] = useState(false);
  const {toolTip, setTooltip} = useContext(ToolTipContext);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const animation = () => {
    setTooltip(true);
    storeData('toolTipDisplay', 'visible');
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() =>
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }, 5000),
    );
  };
  useEffect(() => {
    setDecrease(countCustom >= 1 ? true : false);

    // setIncrease(countCustom < props.maxCount ? false : true);
  }, [countCustom]);
  const addOne = () => {
    setCountCustom((countCustom) => {
      console.log('tool', toolTip);
      !toolTip && countCustom === 5 ? animation() : null;
      return countCustom + 1;
    });
    timer = setTimeout(addOne, 250);
  };
  const reduceOne = () => {
    setCountCustom((countCustom) => (countCustom > 1 ? countCustom - 1 : 1));

    timer = setTimeout(reduceOne, 250);
  };

  const stopTimer = () => {
    clearTimeout(timer);
  };

  return (
    <View>
      <Animated.View // Special animatable View
        style={{
          backgroundColor: 'transparent',
          alignSelf: 'center',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: specificSize(60),
          position: 'absolute',
          top: -10,
          right: 100,
          zIndex: 2,
          opacity: fadeAnim,
        }}>
        <Tooltip text={'برای افزایش تعداد نان ها دکمه + را نگه دارید'} />
      </Animated.View>
      <View style={styles.leftView}>
        <View style={styles.price}>
          <XText color={'#666'} bold smaller>
            <XText priceFormat color={'#707070'} h1>
              {price}
            </XText>{' '}
            تومان
          </XText>
        </View>
        <View style={styles.title}>
          <View style={{paddingRight: 15, marginTop: 22}}>
            <XText color={'#707070'} bold>
              {title}
            </XText>
            <View style={styles.mainButton}>
              <XButton
                btnType="ios"
                onPressIn={reduceOne}
                onPressOut={stopTimer}
                disabledOnPress={decrease}
                ChangeCountCustom={countCustom - 1}
                shadow={10}
                bgColor={'#fff'}
                style={{marginRight: 10}}
                label={{text: '-', bold: true, size: 18, color: '#000'}}
                radius={32}
                circle
              />
              <XText h2 style={styles.countCustom} textAlign={'center'}>
                {countCustom}
              </XText>
              <XButton
                onPressIn={addOne}
                ChangeCountCustom={countCustom - 1}
                onPressOut={stopTimer}
                btnType="ios"
                // disable={increase}
                shadow={10}
                bgColor={'#fff'}
                style={{marginLeft: 10}}
                label={{text: '+', bold: true, size: 18, color: '#000'}}
                radius={32}
                circle
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: specificSize(90, 55, 60),
              height: specificSize(90, 55, 60),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              scaleX: -1,
              backgroundColor:
                index % 2 === 0 ? colors.boxColor2 : colors.boxColor1,
            }}
            onPress={() =>
              navigate('ProductDetails', {
                top: DEVICE_WIDTH * 0.4 - 70,
                left: DEVICE_WIDTH / 2 - 70,
                imageSrc: imageSrc,
                imgBgColor:
                  index % 2 === 0 ? colors.boxColor1 : colors.boxColor2,
              })
            }>
            <FastImage
              style={{
                width: specificSize(65, 75, 85),
                height: specificSize(65, 75, 85),
                backgroundColor:
                  index % 2 === 0 ? colors.boxColor2 : colors.boxColor1,
              }}
              source={imageSrc}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  leftView: {
    height: specificSize(120, 130, 140),
    flexDirection: 'row',
  },
  price: {
    flexDirection: 'row',
    width: specificSize(120, 110, 120),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mainButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 15,
  },
  countCustom: {
    alignSelf: 'center',
    marginHorizontal: 5,
    width: 20,
  },
});

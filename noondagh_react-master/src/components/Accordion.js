import React, {useRef, useState} from 'react';
import {View, Text, Animated, StyleSheet, Easing} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Highlighter from 'react-native-highlight-words';
import {regFont} from '../constants/constants';
import {specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';
import {XIcon, XText} from './XPublics';

export default function Accordion({title, children, searchText, Highlight}) {
  const [showDescription, setShowDescription] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (showDescription) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        useNativeDriver: false,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        useNativeDriver: false,

        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    }
    setShowDescription(!showDescription);
  };

  return (
    <>
      <TouchableOpacity onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Animated.View style={{transform: [{rotateZ: arrowAngle}]}}>
            <XIcon
              type={'awesome'}
              name={'angle-down'}
              size={20}
              color={colors.gray}
            />
          </Animated.View>
          <View style={{width: 20, alignSelf: 'center'}} />

          {Highlight ? (
            <Highlighter
              highlightStyle={{backgroundColor: 'yellow'}}
              searchWords={[searchText]}
              textToHighlight={title}
              style={{
                fontFamily: regFont,
                fontSize: 13,
                flex: 1,
                alignItems: 'flex-end',
                alignSelf: 'center',
              }}
            />
          ) : (
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <XText textAlign={'right'} numberOfLines={2} size={13}>
                {title}
              </XText>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.bodyBackground, {height: bodyHeight}]}>
        <View
          style={styles.bodyContainer}
          onLayout={(event) =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }>
          {children}
        </View>
      </Animated.View>
    </>
  );
}
const styles = StyleSheet.create({
  bodyBackground: {
    backgroundColor: '#e2e2e2',
    overflow: 'hidden',
    borderRadius: 10,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    height: 60,
    marginVertical: 5,
    paddingTop: 3,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    borderColor: '#EFEFEF',
  },
  bodyContainer: {
    backgroundColor: '#e2e2e2',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    // padding: 16,
    // paddingLeft: 20,
    position: 'absolute',
    bottom: 0,
  },
});

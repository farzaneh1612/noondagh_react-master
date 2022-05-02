import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {XText, XButton, XBadge} from './XPublics';
import {specificSize} from '../functions/styleFuncs';
import {DrawerActions} from '@react-navigation/native';
import {colors} from '../styles/publicStyles';
import {navigate, pop} from '../functions/navFuncs';

export default function Header(props) {
  const {
    iconRight,
    iconLeft,
    navigation,
    search,
    title,
    onPress,
    menu,
    grayBack,
  } = props;

  const thisStyles = {
    outerWrapper: {
      backgroundColor: '#fefefe',
    },
    innerWrapper: {
      flexDirection: 'row',
      width: '100%',
      height: specificSize(60, 68, 73),
      alignItems: 'center',
      backgroundColor: grayBack && '#f8f8f8',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingHorizontal: specificSize(3, 7, 13),
    },

    headerSides: {
      alignItems: 'center',
      justifyContent: 'center',
      width: specificSize(45, 43, 47),
    },

    badge: {
      position: 'absolute',
      top: specificSize(5, 5, 5),
      right: specificSize(-2, -10, -18),
    },

    headerCenter: {
      flex: 1,
    },
  };
  return (
    <SafeAreaView style={thisStyles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />
      <View style={thisStyles.innerWrapper}>
        <View style={thisStyles.headerSides}>
          {iconLeft === null ? null : (
            <XButton
              bgColor={'transparent'}
              btnType="ios"
              onPress={() => pop()}
              notMargin
              circle
              radius={specificSize(45, 50, 55)}
              iconRight={
                iconLeft
                  ? {
                      color: colors.baseIconColor,
                      size: specificSize(30, 35, 40),
                      ...iconLeft,
                    }
                  : {
                      color: colors.muted,
                      size: specificSize(30, 35, 42),
                      name: 'chevron-left',
                      type: 'entypo',
                    }
              }
            />
          )}
        </View>

        <View style={thisStyles.headerCenter}>
          <XText bold size={17} textAlign="center">
            {title}
          </XText>
        </View>

        <View style={thisStyles.headerSides}>
          {iconRight === null ? null : (
            <XButton
              bgColor={'transparent'}
              onPress={onPress}
              notMargin
              circle
              radius={specificSize(40, 45, 50)}
              iconRight={
                iconRight
                  ? {
                      color: '#707070',
                      size: specificSize(30, 35, 35),
                      ...iconRight,
                    }
                  : menu
                  ? {
                      color: '#707070',
                      size: specificSize(30, 35, 35),
                      name: 'sort-variant',
                      type: 'MaterialCommunityIcons',
                      flip: true,
                    }
                  : search
                  ? {
                      color: colors.muted,
                      size: specificSize(30, 35, 35),
                      name: 'ios-search-outline',
                      type: 'ion',
                    }
                  : null
              }
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

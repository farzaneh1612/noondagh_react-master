import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {XText, XButton, XBadge} from './XPublics';
import {specificSize} from '../functions/styleFuncs';
import {DrawerActions} from '@react-navigation/native';
import {colors} from '../styles/publicStyles';
import {navigate, pop} from '../functions/navFuncs';

export default function HeaderHome(props) {
  const shoppingCount = '۳';

  const {iconRight, iconLeft, navigation, title} = props;

  const thisStyles = {
    outerWrapper: {
      backgroundColor: '#fefefe',
    },
    innerWrapper: {
      flexDirection: 'row',
      width: '100%',
      height: specificSize(60, 68, 73),
      alignItems: 'center',
      backgroundColor: 'transparent',
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
              onPress={() => navigate('ShoppingList')}
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
                      source: require('../assets/testImg/shoppingbasket.png'),
                      size: specificSize(30, 35, 42),
                      color: colors.baseIconColor,
                    }
              }
            />
          )}
          {shoppingCount && (
            <XBadge
              radius={specificSize(17, 20, 24)}
              label={{text: shoppingCount}}
              style={thisStyles.badge}
            />
          )}
        </View>

        <View style={thisStyles.headerCenter}>
          <XText
            bold
            extraBlackFont
            size={20}
            textAlign="right"
            color={'#B36C71'}
            numberOfLines={1}>
            {' '}
            نان داغ
            <XText lightFont gray>
              {' '}
              سفارش انلاین انواع نان{' '}
            </XText>
          </XText>
        </View>

        <View style={thisStyles.headerSides}>
          {iconRight === null ? null : (
            <XButton
              bgColor={'transparent'}
              onPress={() =>
                props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
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
                  : {
                      color: '#707070',
                      size: specificSize(30, 35, 35),
                      name: 'sort-variant',
                      type: 'MaterialCommunityIcons',
                      flip: true,
                    }
              }
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

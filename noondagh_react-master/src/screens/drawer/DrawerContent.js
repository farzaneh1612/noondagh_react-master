import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Share from 'react-native-share';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  XContainer,
  XSafeContainer,
  XText,
  XIcon,
  XButton,
  XContainerScroll,
} from '../../components/XPublics';
import {navigate} from '../../functions/navFuncs';
import {specificSize} from '../../functions/styleFuncs';
import {colors} from '../../styles/publicStyles';
import {useRecoilState} from 'recoil';
import {lastNameState, firstNameState, phoneState} from '../../recoil/Recoil';

export default function DrawerContent({navigation}) {
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [phone, setPhone] = useRecoilState(phoneState);

  const DrawerItem = [
    {label: 'خانه', iconName: 'home-outline', root: 'Home'},
    {label: 'سفارشات', iconName: 'ios-list-sharp', root: 'Orders'},

    {label: 'پروفایل', iconName: 'person-outline', root: 'Account'},
    {
      label: 'ارتباط با ما',
      iconName: 'ios-call-outline',
      root: 'ConnectUs',
    },
    {
      label: 'درباره ما',
      iconName: 'information-circle-outline',
      root: 'AboutUs',
    },
  ];
  const share = () => {
    navigation.closeDrawer();

    setTimeout(() => {
      let shareOptions = {
        url: 'https://www.itsaco.ir/',
        title: 'اشتراک گذاری از طریق',
        message: 'نرم افزار نان داغ' + '\n\n' + 'دانلود از طریق بازار' + '\n',
      };

      Share.open(shareOptions)
        .then((res) => {})
        .catch((err) => {
          err && console.log(err);
        });
    }, 700);
  };
  return (
    <XSafeContainer>
      <XContainer>
        <ImageBackground
          source={require('../../assets/images/backgroundDrawer.jpg')}
          style={{
            width: specificSize('100%', '100%', '100%'),
            height: specificSize(200, 120, 140),
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}>
            <XText h3 color={'#fff'} bold>
              {firstName} {lastName}
            </XText>
            <XText h3 light color={'#fff'}>
              {phone}
            </XText>
          </View>

          <FastImage
            style={{
              marginHorizontal: 20,
              width: specificSize(75, 75, 85),
              height: specificSize(74, 120, 140),
              borderRadius: 50,

              borderColor: '#fff',
              borderWidth: 0.8,
            }}
            source={require('../../assets/testImg/avatar.png')}
          />
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#fff',

            flex: 1,
            top: -20,
            zIndex: 2,
            overflow: 'hidden',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <XContainer styles={{paddingVertical: 0}}>
            {DrawerItem.map((source, index) => (
              <TouchableOpacity
                onPress={() => navigate(source.root)}
                key={index + ''}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    height: 55,

                    // marginVertical: specificSize(17, 21, 25),
                  }}>
                  <XText size={15} style={{padding: 25}}>
                    {source.label}
                  </XText>
                  <XButton
                    // flip={source.iconName === 'ios-list-sharp'}
                    width={35}
                    bgColor={'#f9f9f9'}
                    radius={35}
                    circle
                    iconRight={{
                      type: 'ion',
                      name: source.iconName,
                      color: colors.muted,
                      size: 20,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ))}
            <View
              style={{borderTopWidth: 0.25, borderTopColor: colors.lightGray}}>
              <TouchableOpacity onPress={() => navigate('Setting')}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    height: 55,

                    // marginVertical: specificSize(17, 21, 25),
                  }}>
                  <XText size={15} style={{padding: 25}}>
                    تنظیمات
                  </XText>
                  <XButton
                    // flip={source.iconName === 'ios-list-sharp'}
                    width={35}
                    bgColor={'#f9f9f9'}
                    radius={35}
                    circle
                    iconRight={{
                      type: 'feather',
                      name: 'settings',
                      color: colors.muted,
                      size: 20,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => share()}>
                <View
                  style={{
                    height: 55,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginHorizontal: 20,

                    // marginVertical: specificSize(17, 21, 25),
                  }}>
                  <XText size={15} style={{padding: 25}}>
                    ارسال برای دوستان
                  </XText>
                  <XButton
                    // flip={source.iconName === 'ios-list-sharp'}
                    width={35}
                    bgColor={'#f9f9f9'}
                    radius={35}
                    circle
                    iconRight={{
                      type: 'feather',
                      name: 'share-2',
                      color: colors.muted,
                      size: 20,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </XContainer>
        </View>
      </XContainer>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderTopColor: colors.lightGray,
          borderTopWidth: 0.25,
          paddingHorizontal: 20,
          top: -20,
        }}>
        <XText h3 style={{padding: 20}}>
          خروج{' '}
        </XText>
        <XButton
          width={35}
          bgColor={'#f9f9f9'}
          radius={35}
          circle
          iconRight={{
            type: 'ion',
            name: 'exit-outline',
            size: 20,
            color: colors.muted,
          }}
        />
      </View>
    </XSafeContainer>
  );
}

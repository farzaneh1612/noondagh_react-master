import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  XButton,
  XCenterContainer,
  XContainer,
  XContainerScroll,
  XSafeContainer,
  XText,
  XTextInput,
} from '../components/XPublics';
import {shadowGen, specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';

import Header from '../components/Header';

// import DeviceInfo from 'react-native-device-info';
// import {getUniqueId, getManufacturer} from 'react-native-device-info';

export default function LogIn(props) {
  // useEffect(() => {
  //   DeviceInfo.getDeviceName().then((deviceName) => {
  //     // const deviceName=deviceName;
  //     console.log('deviceName', deviceName);
  //   });
  // }, []);
  const [register, setRegister] = useState(false);
  return !register ? (
    <XSafeContainer>
      <Header navigation={props.navigation} />

      <XContainer>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={{marginTop: 50}}>
            <XText
              lineHeight={60}
              textAlign={'center'}
              h2
              bold
              color={'#634800'}>
              ورود
            </XText>
            <XTextInput
              bordered
              editable={true}
              width={specificSize(300, 350, 400)}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              iconRight={{
                source: require('../assets/images/mail.png'),
                color: '#9a9a9a',
              }}
              placeholder={'نام کاربری'}
              textAlign={'right'}
            />
            <XTextInput
              editable={true}
              width={specificSize(300, 350, 400)}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              bordered
              editable={true}
              // value={this.state.province}
              placeholder={'رمزعبور'}
              iconRight={{
                type: 'feather',
                name: 'lock',
                size: 18,
                color: '#9a9a9a',
              }}
              textAlign={'right'}
            />
            <XText textAlign={'center'} h3 bold color={colors.muted}>
              رمزعبور خود را فراموش کرده اید؟
            </XText>
          </View>
        </KeyboardAwareScrollView>
      </XContainer>
      <XButton
        onPress={() => setRegister(true)}
        width={specificSize(300, 350, 400)}
        rounded
        radius={10}
        bgColor={colors.bgColorButton}
        label={{
          textAlign: 'center',
          text: 'ورود',
          color: '#fff',
        }}
      />

      <LinearGradient
        colors={['#ddd', '#fff', '#fff', '#fff', '#ffffff11']}
        style={styles.LinearGradient}>
        <XText
          onPress={() => setRegister(true)}
          lineHeight={60}
          textAlign={'center'}
          h2
          bold
          color={colors.muted}>
          ساخت حساب کاربری
        </XText>
        <View style={styles.endScreen} />
      </LinearGradient>
    </XSafeContainer>
  ) : (
    <XSafeContainer>
      <Header navigation={props.navigation} />
      <XContainer>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={{marginTop: 50}}>
            <XText
              lineHeight={60}
              textAlign={'center'}
              h2
              bold
              color={'#634800'}>
              ساخت حساب کاربری
            </XText>
            <XTextInput
              bordered
              editable={true}
              width={specificSize(300, 350, 400)}
              rounded
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              iconRight={{
                type: 'awesome',
                name: 'user-o',
                size: 18,
                color: '#9a9a9a',
              }}
              placeholder={'نام و نام خانوادگی '}
              textAlign={'right'}
            />
            <XTextInput
              bordered
              editable={true}
              width={specificSize(300, 350, 400)}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              bordered
              editable={true}
              iconRight={{
                source: require('../assets/images/mail.png'),
                color: '#9a9a9a',
              }}
              // value={this.state.province}
              placeholder={'نام کاربری'}
              textAlign={'right'}
            />
            <XTextInput
              bordered
              editable={true}
              width={specificSize(300, 350, 400)}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              editable={true}
              iconRight={{
                type: 'feather',
                name: 'lock',
                size: 18,
                color: '#9a9a9a',
              }}
              // value={this.state.province}
              placeholder={'رمزعبور '}
              textAlign={'right'}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={{flex: 1}} />
        <XButton
          onPress={() => setRegister(false)}
          width={specificSize(300, 350, 400)}
          rounded
          radius={10}
          bgColor={colors.bgColorButton}
          label={{
            textAlign: 'center',
            text: 'ساخت حساب کاربری',
            color: '#fff',
          }}
        />

        <LinearGradient
          colors={['#ddd', '#fff', '#fff', '#fff', '#ffffff11']}
          style={styles.LinearGradient}>
          <XText
            lineHeight={60}
            textAlign={'center'}
            h2
            bold
            color={colors.muted}>
            ورود
          </XText>
          <View style={styles.endScreen} />
        </LinearGradient>
      </XContainer>
    </XSafeContainer>
  );
}

const styles = StyleSheet.create({
  LinearGradient: {
    width: '100%',
    height: specificSize(80, 100, 120),
    flexDirection: 'column',
  },
  endScreen: {
    width: 150,
    height: 8,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#634800',
  },
});

import React, {useRef, useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import Header from '../components/Header';
import {
  XButton,
  XCenterContainer,
  XContainer,
  XSafeContainer,
  XText,
  XTextInput,
} from '../components/XPublics';
import {navigate} from '../functions/navFuncs';
import {specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';
// import CodeInput from 'react-native-confirmation-code-input';
import CountDown from '../components/CountDown';
import CodeInput from '../components/CodeInput';

export default function GetAuthenticationCode(props) {
  const [start, setStart] = useState(true);
  const [authentication, setAuthentication] = useState(true);
  const codeInput = useRef();
  const [code, setCode] = useState(12345);

  const onStart = () => {
    setStart(true);
    [...codeInput.current._children].map((i) => i.clear());
  };
  function _onFulfill(code) {
    setAuthentication(true);

    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    if (code == '12345') {
      // Alert.alert('Confirmation Code', 'Successful!', [{text: 'OK'}]
      navigate('SetPassword'),
        {
          cancelable: false,
        };
    } else {
      setAuthentication(false),
        {
          cancelable: false,
        };
    }
  }

  return (
    <XSafeContainer>
      <Header title={'کد احراز هویت'} navigation={props.navigation} />

      <XContainer>
        <View
          style={{
            marginTop: specificSize(100, 120, 140),
            height: specificSize(150, 170, 190),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <XText
            style={{paddingHorizontal: 18}}
            lineHeight={35}
            textAlign={'right'}
            color={'#634800'}>
            لطفا کد تایید را وارد کنید
          </XText>
          <CodeInput
            inputsRef={(e) => (codeInput.current = e)}
            code={code}
            inputsCount={5}
            onFillAll={() => {
              navigate('SetPassword');
              setTimeout(() => {
                setStart(!start);
              }, 500);
            }}
          />
          {/* <CodeInput
            autoFocus
            ref={getCode}
            secureTextEntry
            cellBorderWidth={2}
            activeColor="#888"
            inactiveColor="#e2e2e2"
            className={'border-b'}
            space={5}
            size={30}
            inputPosition="left"
            onFulfill={(code) => _onFulfill(code)}
          /> */}
          {!authentication ? (
            <XText
              style={{paddingHorizontal: 18}}
              lineHeight={35}
              textAlign={'right'}
              color={'#634800'}>
              کد وارد شده اشتباه است{' '}
            </XText>
          ) : null}
        </View>
        <View
          style={{
            width: '100%',
            height: specificSize(70, 90, 110),
            justifyContent: 'center',
          }}>
          {start ? (
            <CountDown duration={5} onFinish={() => setStart(false)} />
          ) : (
            <XButton
              onPress={() => {
                setStart(true);
                [...codeInput.current._children].map((i) => i.clear());
              }}
              width={specificSize(130, 150, 170)}
              label={{
                textAlign: 'right',
                text: 'ارسال مجدد',
                color: colors.cancelColor,
              }}
            />
          )}
        </View>
      </XContainer>
      <XButton
        onPress={() => navigate('SetPassword')}
        width={specificSize(300, 350, 400)}
        rounded
        radius={10}
        bgColor={colors.bgColorButton}
        label={{
          textAlign: 'center',
          text: 'تایید ',
          color: '#fff',
        }}
      />
    </XSafeContainer>
  );
}

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import {
  XButton,
  XContainer,
  XSafeContainer,
  XText,
  XTextInput,
} from '../components/XPublics';
import {navigate} from '../functions/navFuncs';
import {specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';

export default function SetPassword(props) {
  const [hidePasswordNew, setHidePasswordNew] = useState(true);
  const [hidePasswordNewRepeat, setHidePasswordNewRepeat] = useState(true);

  return (
    <XSafeContainer>
      <XContainer>
        <Header title={' تغییر رمز عبور'} navigation={props.navigation} />
        <View style={{paddingHorizontal: 20}}>
          <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
            رمز عبورجدید
          </XText>
          <XTextInput
            bordered
            editable={true}
            width={specificSize('100%', 350, 400)}
            rounded
            minLength={4}
            maxLength={12}
            radius={10}
            textInputStyle={{backgroundColor: '#f1f1f1'}}
            placeholder={'رمز عبور جدید را وارد کنید'}
            textAlign={'right'}
            secureTextEntry={hidePasswordNew}
            iconLeftPress={() =>
              setHidePasswordNew((hidePasswordNew) => !hidePasswordNew)
            }
            iconLeft={{
              type: 'ion',
              name: hidePasswordNew ? 'ios-eye-outline' : 'ios-eye-off-outline',
              size: 18,
              color: '#9a9a9a',
            }}
          />
          <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
            تکرار رمز عبور جدید
          </XText>

          <XTextInput
            bordered
            ma
            editable={true}
            width={specificSize('100%', 350, 400)}
            rounded
            radius={10}
            minLength={4}
            maxLength={12}
            textInputStyle={{backgroundColor: '#f1f1f1'}}
            placeholder={'رمز عبور جدید را مجددا وارد کنید '}
            textAlign={'right'}
            secureTextEntry={hidePasswordNewRepeat}
            iconLeftPress={() =>
              setHidePasswordNewRepeat(
                (hidePasswordNewRepeat) => !hidePasswordNewRepeat,
              )
            }
            textAlign={'right'}
            iconLeft={{
              type: 'ion',
              name: hidePasswordNewRepeat
                ? 'ios-eye-outline'
                : 'ios-eye-off-outline',
              size: 18,
              color: '#9a9a9a',
            }}
          />
        </View>
      </XContainer>
      <XButton
        onPress={() => navigate('Account')}
        width={specificSize(300, 350, 400)}
        rounded
        radius={10}
        bgColor={colors.bgColorButton}
        label={{
          textAlign: 'center',
          text: 'تغییر رمز عبور ',
          color: '#fff',
        }}
      />
    </XSafeContainer>
  );
}

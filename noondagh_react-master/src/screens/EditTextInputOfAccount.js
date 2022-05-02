import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Header from '../components/Header';
import {useRecoilState} from 'recoil';

import {
  XContainer,
  XIcon,
  XSafeContainer,
  XText,
  XTextInput,
  XButton,
} from '../components/XPublics';
import {navigate} from '../functions/navFuncs';
import {specificSize} from '../functions/styleFuncs';
import {
  lastNameState,
  firstNameState,
  password,
  emailState,
} from '../recoil/Recoil';
import {colors} from '../styles/publicStyles';
import {useForm, Controller} from 'react-hook-form';

export default function EditTextInputOfAccount(props) {
  const [hidePasswordExc, setHidePasswordExc] = useState(true);
  const [hidePasswordNew, setHidePasswordNew] = useState(true);
  const [hidePasswordNewRepeat, setHidePasswordNewRepeat] = useState(true);
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [email, setEmail] = useRecoilState(emailState);

  const {handleSubmit, control} = useForm();

  return (
    <XSafeContainer>
      <Header title={'ویرایش حساب کاربری'} navigation={props.navigation} />
      <XContainer>
        {props.route.params.page === 'setFullName' ? (
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
              نام{' '}
            </XText>

            <XTextInput
              bordered
              editable={true}
              width={specificSize('100%', 350, 400)}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              placeholder={'نام را وارد کنید'}
              textAlign={'right'}
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
            />
            <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
              نام خانوادگی
            </XText>
            <XTextInput
              bordered
              editable={true}
              width={specificSize('100%', 350, 400)}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              placeholder={'نام خانوادگی را وارد کنید'}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              textAlign={'right'}
            />
          </View>
        ) : props.route.params.page === 'setEmail' ? (
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
              پست الکترونیکی{' '}
            </XText>

            <XTextInput
              bordered
              editable={true}
              width={specificSize('100%', 350, 400)}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              placeholder={' پست الکترونیکی خود را وارد کنید '}
              value={email}
              onChangeText={(text) => setEmail(text)}
              textAlign={'left'}
            />
          </View>
        ) : props.route.params.page === 'setPassword' ? (
          <View style={{paddingHorizontal: 20}}>
            <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
              رمزعبور قبلی
            </XText>

            <XTextInput
              notMargin
              bordered
              editable={true}
              width={specificSize('100%', 350, 400)}
              rounded
              minLength={4}
              maxLength={12}
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              placeholder={'رمزعبور قبلی خود را وارد کنید'}
              textAlign={'right'}
              secureTextEntry={hidePasswordExc}
              iconLeftPress={() =>
                setHidePasswordExc((hidePasswordExc) => !hidePasswordExc)
              }
              iconLeft={{
                type: 'ion',
                name: hidePasswordExc
                  ? 'ios-eye-outline'
                  : 'ios-eye-off-outline',
                size: 18,
                color: '#9a9a9a',
              }}
            />

            <XButton
              style={{paddingHorizontal: 18, paddingBottom: 2}}
              rightAlign={0.1}
              rightAlignContent={0.1}
              height={25}
              onPress={() => navigate('ResetPassword')}
              width={specificSize(120, 150, 180)}
              label={{
                textAlign: 'right',
                text: 'بازیابی رمزعبور',
                color: '#74b9ff',
              }}
              iconLeft={{
                type: 'awesome',
                name: 'chevron-left',
                color: '#74b9ff',
                size: 12,
              }}
            />

            <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
              رمز عبورجدید
            </XText>
            <XTextInput
              bordered
              editable={true}
              width={specificSize('100%', 350, 400)}
              rounded
              radius={10}
              minLength={4}
              maxLength={12}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              placeholder={'رمز عبور جدید خود را وارد کنید'}
              textAlign={'right'}
              secureTextEntry={hidePasswordNew}
              iconLeftPress={() =>
                setHidePasswordNew((hidePasswordNew) => !hidePasswordNew)
              }
              iconLeft={{
                type: 'ion',
                name: hidePasswordNew
                  ? 'ios-eye-outline'
                  : 'ios-eye-off-outline',
                size: 18,
                color: '#9a9a9a',
              }}
            />
            <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
              تکرار رمز عبور جدید
            </XText>

            <XTextInput
              bordered
              editable={true}
              width={specificSize('100%', 350, 400)}
              rounded
              radius={10}
              minLength={4}
              maxLength={12}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              placeholder={'مجددا رمز عبور جدید خود را وارد کنید '}
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
            {/* <Controller
              name="name"
              control={control}
              render={({ onChange, value }) => (
              <TextInput
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="Name"
              defaultValue=""

            />
    )}
  /> */}
          </View>
        ) : null}
      </XContainer>
      <XButton
        onPress={() => navigate('Account')}
        width={specificSize(300, 350, 400)}
        rounded
        radius={10}
        bgColor={colors.bgColorButton}
        label={{
          textAlign: 'center',
          text: ' تایید اطلاعات',
          color: '#fff',
        }}
      />
    </XSafeContainer>
  );
}

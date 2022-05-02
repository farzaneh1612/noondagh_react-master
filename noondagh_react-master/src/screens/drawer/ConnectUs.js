import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  XButton,
  XContainer,
  XContainerScroll,
  XSafeContainer,
  XText,
  XTextInput,
} from '../../components/XPublics';
import {specificSize} from '../../functions/styleFuncs';
import {useRecoilState} from 'recoil';
import {lastNameState, firstNameState, emailState} from '../../recoil/Recoil';
import {subject} from '../../constants/ConstAray';
import XPicker from '../../components/XPicker';
import Header from '../../components/Header';
import {colors} from '../../styles/publicStyles';

export default function ConnectUs({navigation}) {
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [subjectState, setSubject] = useState('');
  return (
    <XSafeContainer>
      <Header title={'ارتباط با ما'} navigation={navigation} grayBack />

      <XContainerScroll
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignSelf: 'center',
        }}>
        <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
          نام و نام خانوادگی{' '}
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
          value={`${firstName} ${lastName}`}
        />
        <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
          ایمیل{' '}
        </XText>
        <XTextInput
          textAlign={'left'}
          bordered
          editable={true}
          width={specificSize('100%', 350, 400)}
          rounded
          radius={10}
          textInputStyle={{backgroundColor: '#f1f1f1'}}
          placeholder={'ایمیل را وارد کنید '}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
          موضوع{' '}
        </XText>
        <XPicker
          width={'100%'}
          rounded
          radius={10}
          textInputStyle={{backgroundColor: '#f1f1f1'}}
          searchEnable
          items={subject}
          keyName={'title'}
          placeholder="موضوع"
          iconLeft={{
            type: 'ion',
            name: 'ios-chevron-down-sharp',
            size: 18,
          }}
          onSelectValue={(val) => {
            setSubject(val.id);
          }}
        />
        <XText style={{paddingHorizontal: 18, paddingBottom: 2}} size={13}>
          متن پیام{' '}
        </XText>
        <XTextInput
          radius={10}
          textInputStyle={{backgroundColor: '#f1f1f1'}}
          returnKeyType={'next'}
          placeholder="پیام را وارد کنید"
          textArea
          bordered
          // errText={{text: 'test'}}
        />
      </XContainerScroll>
      <XButton
        onPress={() => navigate('ShoppingList')}
        width={specificSize(300, 350, 400)}
        rounded
        radius={10}
        bgColor={colors.bgColorButton}
        label={{
          textAlign: 'center',
          text: 'ارسال',
          color: '#fff',
        }}
      />
    </XSafeContainer>
  );
}

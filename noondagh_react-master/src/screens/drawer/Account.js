import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import Header from '../../components/Header';
import {
  XContainer,
  XIcon,
  XSafeContainer,
  XText,
} from '../../components/XPublics';
import BoxAccount from '../../components/BoxAccount';
import XEmptyScreenComponent from '../../components/XEmptyScreenComponent';
import {navigate} from '../../functions/navFuncs';
import {
  lastNameState,
  firstNameState,
  emailState,
  passwordState,
} from '../../recoil/Recoil';

export default function Account(props) {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <XEmptyScreenComponent loading={loading} />;
  }
  return (
    <XSafeContainer>
      <XContainer>
        <Header title={'حساب کاربری'} navigation={props.navigation} />
        <BoxAccount
          label={'نام و نام خانوادگی'}
          details={`${firstName}${' '}${lastName}`}
          imgSrc={require('../../assets/testImg/download.jpeg')}
          onPress={() =>
            navigate('EditTextInputOfAccount', {page: 'setFullName'})
          }
        />
        <BoxAccount
          label={'پست الکترونیک'}
          details={email}
          onPress={() => navigate('EditTextInputOfAccount', {page: 'setEmail'})}
        />
        <BoxAccount
          label={'رمزعبور'}
          details={password}
          secureTextEntry={true}
          onPress={() =>
            navigate('EditTextInputOfAccount', {page: 'setPassword'})
          }
        />
      </XContainer>
    </XSafeContainer>
  );
}

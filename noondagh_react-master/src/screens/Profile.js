import React from 'react';
import {
  XContainer,
  XSafeContainer,
  XContainerScroll,
} from '../components/XPublics';
import {colors} from '../styles/publicStyles';
import Header from '../components/Header';
import BoxProfile from '../components/BoxProfile';
import {navigate} from '../functions/navFuncs';

export default function Profile(props) {
  return (
    <XSafeContainer>
      <Header title={'حساب کاربری'} navigation={props.navigation} />
      <XContainer style={{paddingHorizontal: 20}}>
        <XContainerScroll
          contentContainerStyle={{
            flex: 1,
            alignSelf: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <BoxProfile
            flip={false}
            iconType={'awesome'}
            iconName={'user-o'}
            title={'حساب کابری'}
            onPress={() => navigate('Account')}
          />
          <BoxProfile
            flip={true}
            iconType={'ion'}
            iconName={'ios-list-sharp'}
            title={'سفارشات شما'}
            onPress={() => navigate('Orders')}
          />
          <BoxProfile
            flip={false}
            title={'خروج'}
            iconType={'ion'}
            iconName={'md-close-circle-outline'}
            onPress={() => navigate('Home')}
          />
        </XContainerScroll>
      </XContainer>
    </XSafeContainer>
  );
}

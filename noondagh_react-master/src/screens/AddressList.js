import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {
  XIcon,
  XText,
  XButton,
  XTextInput,
  XSafeContainer,
  XContainerScroll,
} from '../components/XPublics';
import {shadowGen, specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigate, pop} from '../functions/navFuncs';
import Header from '../components/Header';
import XPicker from '../components/XPicker';
import XEmptyScreenComponent from '../components/XEmptyScreenComponent';
import {addressList, cities, provinces} from '../constants/ConstAray';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function AddressList(props) {
  const [addressId, setAddressId] = useState(1);
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState('');
  const [province, setProvince] = useState(0);
  const [address, setAddress] = useState(addressList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <XEmptyScreenComponent loading={loading} />;
  }

  const registerTheAddress = (id) => {
    setAddressId(id);
    setTimeout(() => {
      pop();
    }, 500);
  };

  const removeAddress = (deletePostId) => {
    let addressUpdate = address.filter((item) => item.id != deletePostId);
    setAddress(addressUpdate);
  };

  return (
    <XSafeContainer>
      <Header title={'لیست آدرس ها'} navigation={props.navigation} grayBack />
      <XContainerScroll>
        {address.map((item, index) => (
          <TouchableOpacity
            key={index + ''}
            activeOpacity={1}
            style={{
              width: '100%',
              height: specificSize(140, 190, 240),
            }}>
            <View style={styles.radioButton}>
              <View
                style={{
                  height: '100%',
                  alignSelf: 'flex-end',
                  justifyContent: 'space-between',
                  paddingVertical: 5,
                }}>
                <View height={23} />
                <XIcon
                  style={{marginRight: 5}}
                  type="ion"
                  name={
                    addressId === item.id
                      ? 'radio-button-on'
                      : 'radio-button-off-sharp'
                  }
                  color={
                    addressId === item.id ? colors.boxTitleColor : colors.muted
                  }
                  size={23}
                  onPress={() => registerTheAddress(item.id)}
                />
                <XIcon
                  name={'trash-outline'}
                  size={23}
                  type="ion"
                  color={colors.muted}
                  onPress={() => removeAddress(item.id)}
                />
              </View>
              <View style={styles.province}>
                <XText color={'#666'} numberOfLines={3}>
                  <XText color={'#707070'}>استان {item.province}</XText>
                  {' / '}
                  شهرستان {item.city}
                  {' / '}
                  <XText color={'#666'}>{item.address}</XText>{' '}
                </XText>
                <XText color={'#707070'}> {item.phone}</XText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </XContainerScroll>
      <XButton
        onPress={() => setVisible(true)}
        width={specificSize(300, 350, 400)}
        rounded
        radius={10}
        bgColor={colors.bgColorButton}
        label={{
          textAlign: 'center',
          text: 'افزودن آدرس جدید',
          color: '#fff',
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <XSafeContainer>
          <Header title={'واردکردن آدرس'} navigation={props.navigation} />

          <XContainerScroll contentContainerStyle={styles.picker}>
            <XPicker
              width={'100%'}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              searchEnable
              items={provinces}
              keyName={'title'}
              placeholder="استان"
              iconLeft={{
                type: 'ion',
                name: 'ios-chevron-down-sharp',
                size: 18,
              }}
              onSelectValue={(val) => {
                setProvince(val.id - 1);
                setCity(cities[val.id - 1][1].id);
              }}
            />

            <XPicker
              width={'100%'}
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
              searchEnable
              items={cities[province]}
              keyName={'title'}
              placeholder="شهرستان"
              iconLeft={{
                type: 'ion',
                name: 'ios-chevron-down-sharp',
                size: 18,
              }}
              onSelectValue={(val) => {
                setCity(val.id);
              }}
            />

            <XTextInput
              placeholder={'کدپستی'}
              bordered
              rounded
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}
            />

            <XTextInput
              placeholder="آدرس"
              textArea
              bordered
              radius={10}
              textInputStyle={{backgroundColor: '#f1f1f1'}}

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
              text: 'ثبت آدرس ',
              color: '#fff',
            }}
          />
        </XSafeContainer>
      </Modal>
    </XSafeContainer>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    width: specificSize('88%', 250, 300),
    height: specificSize(120, 170, 220),
    backgroundColor: '#fff',
    borderColor: '#e2e2e2',
    ...shadowGen(2),
    borderWidth: 0.7,
    borderRadius: 20,
  },
  province: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingVertical: 5,
  },
  picker: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
  },
});

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  XText,
  XIcon,
  XButton,
  XSafeContainer,
  XContainerScroll,
} from '../components/XPublics';
import Header from '../components/Header';
import XEmptyScreenComponent from '../components/XEmptyScreenComponent';
import ShoppingListComponent from '../components/ShoppingList‌‌Box';
import {colors} from '../styles/publicStyles';
import {specificSize} from '../functions/styleFuncs';
import {navigate} from '../functions/navFuncs';
import {bread} from '../constants/ConstAray';

export default function ShoppingList(props) {
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  const changePrice = (id, count, price) => {
    let sum = count * price;
    setTotalCount(totalCount + sum);
  };

  if (loading) {
    return <XEmptyScreenComponent loading={loading} />;
  }

  return (
    <XSafeContainer>
      <Header title={'سبد خرید'} navigation={props.navigation} grayBack />

      <XContainerScroll
        contentContainerStyle={{paddingHorizontal: 20, alignSelf: 'center'}}>
        <View style={styles.text}>
          <XText style={styles.address} bold>
            آدرس{' '}
          </XText>
          <View style={styles.Icon}>
            <XIcon
              onPress={() => navigate('AddressList')}
              color={colors.baseIconColor}
              size={25}
              name="chevron-left"
              type="entypo"
            />
            <XText
              style={{
                marginTop: specificSize(17, 20, 25),
              }}
              bold>
              استان اصفهان,شهرستان کاشان, میدان امام حسین, کوی اندیشه, پلاک ۶۷{' '}
            </XText>
          </View>

          <XText
            onPress={() => navigate('AddressList')}
            style={{
              marginTop: specificSize(17, 20, 25),
            }}
            textAlign="left"
            color="#0092dc"
            bold>
            تغییر آدرس{' '}
          </XText>
        </View>

        <View style={styles.shoppingList}>
          {bread.map((item, index) => (
            <ShoppingListComponent
              key={index + ''}
              navigation={props.navigation}
              title={item.name}
              price={item.price}
              count={item.count}
              imageSrc={item.imageSrc}
              index={index}
              ChangeCountCustom={(count) => {
                changePrice(item.id, count, item.price);
                // this.onValueChange1(item.id, count);
              }}
            />
          ))}
        </View>
        <View style={styles.price}>
          <View style={styles.totalCount}>
            <XText color={'#707070'} bold smaller>
              <XText priceFormat color={'#707070'} h2>
                {/* {totalCount} */}
                ۳,۴۰۰
              </XText>
              {'   '}
              تومان
            </XText>
            <XText bold>مجموع</XText>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <XText color={'#707070'} bold smaller>
              <XText priceFormat color={'#707070'} h2>
                ۲,۴۰۰
              </XText>
              {'   '}
              تومان
            </XText>
            <XText bold>هزینه پیک</XText>
          </View>
        </View>
        <View style={styles.payment}>
          <XText color={colors.priceColor} bold smaller>
            <XText priceFormat color={colors.priceColor} h1>
              ۵,۴۰۰
            </XText>{' '}
            تومان
          </XText>
          <XText h2 bold>
            قابل پرداخت
          </XText>
        </View>
        <XButton
          width={specificSize(300, 350, 400)}
          rounded
          radius={10}
          bgColor={colors.priceColor}
          label={{
            textAlign: 'center',
            text: 'نهایی کردن پرداخت و خرید',
            color: '#fff',
            fontSize: 30,
          }}
        />
      </XContainerScroll>
    </XSafeContainer>
  );
}
const styles = StyleSheet.create({
  text: {
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderBottomColor: colors.muted,
  },
  address: {
    justifyContent: 'center',
    marginTop: specificSize(17, 20, 25),
    marginRight: specificSize(10, 13, 16),

    marginLeft: specificSize(25, 23, 25),
  },
  Icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: specificSize(20, 23, 25),
    marginLeft: specificSize(10, 13, 16),
  },
  shoppingList: {
    borderBottomWidth: 0.5,
    paddingBottom: (50, 60, 70),
    borderBottomColor: colors.muted,
  },
  price: {
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    paddingTop: specificSize(15, 20, 25),
    paddingBottom: specificSize(25, 30, 35),
    borderBottomColor: colors.muted,
  },
  totalCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 15,
  },
});

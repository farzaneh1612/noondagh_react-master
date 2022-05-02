import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import Accordion from '../../components/Accordion';
import {
  XContainer,
  XButton,
  XContainerScroll,
  XIcon,
  XSafeContainer,
  XText,
} from '../../components/XPublics';
import Header from '../../components/Header';
import {colors} from '../../styles/publicStyles';
import XEmptyScreenComponent from '../../components/XEmptyScreenComponent';
import {specificSize} from '../../functions/styleFuncs';
export default function Orders(props) {
  const [loading, setLoading] = useState(true);

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
      <Header title={'سفارشات'} navigation={props.navigation} />
      <XContainerScroll>
        <XContainer>
          <View style={{width: '85%', alignSelf: 'center'}}>
            <Accordion title={'سفارش ۳۵۵'}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                {/* {ordersList.map((index,item)=>
              )} */}
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor1,
                      borderRadius: 20,
                    }}
                    source={require('../../assets/testImg/sangak.png')}
                  />
                  <XText size={12}>۲ عدد</XText>
                </View>
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor2,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/testImg/taftoon.png')}
                  />
                  <XText size={12}>۲ عدد</XText>
                </View>
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor1,
                      borderRadius: 20,
                    }}
                    source={require('../../assets/testImg/barbari.png')}
                  />
                  <XText size={12}>۳ عدد</XText>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'flex-end',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <XText textAlign={'right'} bold>
                    رایگان
                  </XText>
                  <XText muted textAlign={'right'} bold>
                    ارسال
                  </XText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <XText textAlign={'right'} bold>
                    <XText priceFormat>4000</XText> تومان
                  </XText>
                  <XText muted textAlign={'right'} bold>
                    قیمت{' '}
                  </XText>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <XText textAlign={'right'} bold>
                    {' '}
                    ارسال شده{' '}
                  </XText>
                  <XIcon
                    style={{marginRight: -3}}
                    name={'md-checkmark-circle-sharp'}
                    type={'ion'}
                    color={colors.confirmationColor}
                  />
                </View>
              </View>
            </Accordion>
            <Accordion title={' سفارش ۳۵۶'}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                {/* {ordersList.map((index,item)=>
              )} */}
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor1,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/testImg/sangak.png')}
                  />
                  <XText size={12}>۲ عدد</XText>
                </View>
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor2,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/testImg/taftoon.png')}
                  />
                  <XText size={12}>۲ عدد</XText>
                </View>
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor1,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/testImg/barbari.png')}
                  />
                  <XText size={12}>۳ عدد</XText>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'flex-end',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <XText textAlign={'right'} bold>
                    رایگان
                  </XText>
                  <XText muted textAlign={'right'} bold>
                    ارسال
                  </XText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <XText textAlign={'right'} bold>
                    <XText priceFormat>4000</XText> تومان
                  </XText>
                  <XText muted textAlign={'right'} bold>
                    قیمت{' '}
                  </XText>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <XText textAlign={'right'} bold>
                    {' '}
                    لغوشده{' '}
                  </XText>
                  <XIcon
                    style={{marginRight: -3}}
                    name={'close-circle'}
                    type={'ion'}
                    color={colors.cancelColor}
                  />
                </View>
              </View>
            </Accordion>
            <Accordion title={' سفارش ۳۵۷'}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                {/* {ordersList.map((index,item)=>
              )} */}
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor1,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/testImg/sangak.png')}
                  />
                  <XText size={12}>۲ عدد</XText>
                </View>
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor2,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/testImg/taftoon.png')}
                  />
                  <XText size={12}>۲ عدد</XText>
                </View>
                <View style={{flexDirection: 'column', paddingHorizontal: 3}}>
                  <FastImage
                    style={{
                      alignSelf: 'flex-end',
                      width: specificSize(65, 75, 85),
                      height: specificSize(65, 75, 85),
                      backgroundColor: colors.boxColor1,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/testImg/barbari.png')}
                  />
                  <XText size={12}>۳ عدد</XText>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'flex-end',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <XText textAlign={'right'} bold>
                    رایگان
                  </XText>
                  <XText muted textAlign={'right'} bold>
                    ارسال
                  </XText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <XText textAlign={'right'} bold>
                    <XText priceFormat>4000</XText> تومان
                  </XText>
                  <XText muted textAlign={'right'} bold>
                    قیمت{' '}
                  </XText>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <XText textAlign={'right'} bold>
                    {' '}
                    درحال ارسال{' '}
                  </XText>
                  <XIcon
                    style={{marginRight: -3}}
                    name={'alert-circle'}
                    type={'ion'}
                    color={colors.sendingColor}
                  />
                </View>
              </View>
            </Accordion>
          </View>
        </XContainer>
      </XContainerScroll>
    </XSafeContainer>
  );
}

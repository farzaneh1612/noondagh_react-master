import React, {useState, useRef} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';

import Highlighter from 'react-native-highlight-words';

import Accordion from '../../components/Accordion';
import Header from '../../components/Header';
import {
  XContainerScroll,
  XIcon,
  XSafeContainer,
  XText,
  XTextInput,
} from '../../components/XPublics';
import {regFont} from '../../constants/constants';

import {questionAnswer} from '../../constants/ConstAray';
import {specificSize} from '../../functions/styleFuncs';

let timer;

export default function Question({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState(questionAnswer);
  const [highLight, setHighLight] = useState('');

  const scrollY = useRef(new Animated.Value(0)).current;

  const cleanSearchBox = () => {
    setSearchText('');
    setListItems(questionAnswer);
    // setCleanSearchResult(true);
    console.log('listItems', listItems);
  };

  const search = (input) => {
    let listItems = [];
    if (input.length > 2) {
      questionAnswer.map((item) => {
        if (item.question.includes(input)) {
          listItems.push(item);
          highlight('جستجو');
        } else if (item.answer.includes(input)) {
          listItems.push(item);
          highlight('جستجو');
        }
      });
    }
    console.log('listItems', listItems);

    setListItems(listItems);
  };

  const NO_WIDTH_SPACE = '​';

  const highlight = (string) =>
    string.split(' ').map((word, i) => (
      <Text key={i}>
        <Text style={styles.highlighted}>{word} </Text>
        {NO_WIDTH_SPACE}
      </Text>
    ));

  const borderColor = scrollY.interpolate({
    inputRange: [0, 20, 20],
    outputRange: ['#fff', '#f9f9f9', '#f9f9f9'],
  });

  return (
    <XSafeContainer>
      <Header title={'سوالات متداول'} navigation={navigation} />
      <Animated.View style={{...styles.searchBoxWrapper, borderColor}}>
        <XTextInput
          onChangeText={(text) => {
            setSearchText(text);
            if (text.length > 2) {
              if (timer) {
                clearTimeout(timer);
              }
              timer = setTimeout(() => {
                timer = null;
                search(text);

                // do something
              }, 50);
            }

            if (text.length < 3) {
              setListItems(questionAnswer);

              if (timer) {
                clearTimeout(timer);
              }
            }
          }}
          // style={{paddingHorizontal: 20}}
          value={searchText}
          height={specificSize(43, 55, 60)}
          bordered
          width={'100%'}
          rounded
          placeholder={'جستجو کنید'}
          iconLeftPress={() => cleanSearchBox()}
          iconLeft={{
            type: 'ion',
            name:
              searchText.length > 0 ? 'ios-close-outline' : 'search-outline',
            size: 25,
          }}
          disableErrText
        />
      </Animated.View>
      <XContainerScroll>
        <View style={{paddingHorizontal: 20}}>
          {listItems.map((source, index) => (
            <Accordion
              title={source.question}
              searchText={searchText}
              Highlight>
              <View
                key={index + ''}
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <Highlighter
                  highlightStyle={{backgroundColor: 'yellow'}}
                  searchWords={[searchText]}
                  textToHighlight={source.answer}
                  style={{
                    fontFamily: regFont,
                    fontSize: 13,
                    paddingHorizontal: 2,
                  }}
                />
                {/* <XText light size={12} textAlign={'right'}>
                  {source.answer}
                </XText> */}
              </View>
            </Accordion>
          ))}
        </View>
      </XContainerScroll>
    </XSafeContainer>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: specificSize(20, 22, 25),
  },

  searchBoxWrapper: {
    width: specificSize('100%'),
    paddingHorizontal: specificSize(20, 25, 30),
    borderBottomWidth: 2,
  },
  highlighted: {
    backgroundColor: 'yellow',
  },
});

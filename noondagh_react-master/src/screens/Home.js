import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {
  XText,
  XContainer,
  XTextInput,
  XSafeContainer,
  XContainerScroll,
  XButton,
} from '../components/XPublics';
import Header from '../components/HeaderHome';
import BoxProduct from '../components/BoxProduct';
import {specificSize} from '../functions/styleFuncs';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../styles/publicStyles';
import {category, bread, topBread} from '../constants/ConstAray';
import SearchResult from '../screens/SearchResult';
import XEmptyScreenComponent from '../components/XEmptyScreenComponent';
import DoubleClickToClose from '../components/backAction/DoubleClickToClose';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import SearchResultBack from '../components/backAction/SearchResultBack.js';

let timer;
export default function Home(props) {
  // states
  const [selectedCat, setSelectedCat] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cleanSearchResult, setCleanSearchResult] = useState(false);

  // refs
  const scrollY = useRef(new Animated.Value(0)).current;
  //focuse
  const isFocused = useIsFocused();

  //
  const cleanSearchBox = () => {
    setSearchText('');
    // setCleanSearchResult(true);
    console.log('object');
  };

  const search = (input) => {
    let listItems = [];
    if (input.length > 2) {
      bread.map((item) => {
        if (item.name.includes(input)) {
          listItems.push(item);
        }
      });
    }
    console.log('listItems', listItems);

    setListItems(listItems);
  };
  // animations parameters
  const borderColor = scrollY.interpolate({
    inputRange: [0, 20, 20],
    outputRange: ['#fff', '#f9f9f9', '#f9f9f9'],
  });
  function backHandler() {
    if (isFocused) {
      if (searchText.length > 0) {
        return <SearchResultBack event={cleanSearchBox} />;
      }
      return <DoubleClickToClose />;
    }
  }
  return (
    <XSafeContainer>
      {/** isFocused */}
      {backHandler()}
      {/** header */}
      <Header
        shoppingCount={4}
        headerHome
        cartCount={5}
        navigation={props.navigation}
      />

      <XContainer style={styles.wrapper}>
        {/** search box section */}
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
                }, 2000);
              }

              if (text.length < 3) {
                if (timer) {
                  clearTimeout(timer);
                }
              }
            }}
            value={searchText}
            height={specificSize(43, 55, 60)}
            bordered
            width={'100%'}
            rounded
            placeholder={'دنبال چه نونی میگردی؟'}
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
        {searchText.length > 2 ? (
          <SearchResult result={listItems} />
        ) : (
          <XContainer>
            {/** main content  */}

            <XContainerScroll
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false},
              )}
              onMomentumScrollEnd={(e) =>
                console.log(e.nativeEvent.contentOffset)
              }>
              <View style={styles.categoriesSection}>
                <FlatList
                  data={category}
                  horizontal
                  inverted
                  contentContainerStyle={styles.categoriesList}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index + ''}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => setSelectedCat(index)}
                      activeOpacity={0.8}
                      style={styles.categoriesButton}>
                      <XText
                        bold
                        color={
                          index === selectedCat ? '#035b00' : colors.muted
                        }>
                        {item.text}
                      </XText>
                      <View
                        style={{
                          ...styles.categoriesDot,
                          ...{
                            backgroundColor:
                              index === selectedCat
                                ? colors.badgeColor
                                : 'transparent',
                          },
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
              <FlatList
                data={topBread}
                horizontal
                inverted
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index + ''}
                renderItem={({item, index}) => (
                  <BoxProduct item={item} index={index} />
                )}
              />

              <XText bold style={styles.rowTitle}>
                محبوب ترین
              </XText>
              <FlatList
                data={bread}
                horizontal
                inverted
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index + ''}
                renderItem={({item, index}) => (
                  <BoxProduct item={item} index={index} />
                )}
              />

              <XText bold style={styles.rowTitle}>
                پر فروش ترین
              </XText>
              <FlatList
                data={bread}
                horizontal
                inverted
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index + ''}
                renderItem={({item, index}) => (
                  <BoxProduct item={item} index={index} />
                )}
              />
            </XContainerScroll>
          </XContainer>
        )}
      </XContainer>
    </XSafeContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: specificSize(20, 22, 25),
  },

  searchBoxWrapper: {
    width: specificSize('100%'),
    paddingHorizontal: specificSize(14, 14, 18),
    borderBottomWidth: 2,
  },

  navbarWrapper: {
    height: specificSize(65, 75, 80),
  },

  rowTitle: {
    marginRight: specificSize(20, 22, 25),
    marginBottom: specificSize(10, 15, 15),
    marginTop: specificSize(20, 25, 30),
  },

  categoriesSection: {
    height: specificSize(50, 65, 70),
    width: '100%',
    alignItems: 'center',
    marginBottom: specificSize(10, 13, 17),
  },

  categoriesList: {
    flexGrow: 1,
  },

  categoriesButton: {
    height: specificSize(55, 65, 70),
    width: specificSize(55, 65, 70),
    borderRadius: specificSize(55, 65, 70),
    marginRight: specificSize(1, 3, 5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoriesDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },

  contentContainer: {paddingRight: specificSize(15, 17, 20)},
});

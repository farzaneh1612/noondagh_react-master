import React, {Component} from 'react';
import {View, Modal, ScrollView, TouchableOpacity} from 'react-native';
import {XButton, XSafeContainer, XTextInput, XText} from './XPublics';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {shadowGen, specificSize} from '../functions/styleFuncs';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constants/constants';
import {Separator} from '../styles/publicStyles';

export default class XPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      listItems: this.props.items,
      showList: false,
      selectedItem: this.props.items[this.props.defaultIndex] || null,
      selectedIndex: this.props.defaultIndex,
    };
  }

  componentDidUpdate(prevProps, prevStat) {
    if (prevProps.items !== this.props.items) {
      this.setState({
        listItems: this.props.items,
        selectedItem: this.props.items[0],
      });
    }
  }

  styles = {
    touchable: {
      height: 45,
      borderRadius: 5,
      position: 'absolute',
      backgroundColor: 'transparent',
      alignSelf: 'center',
    },

    wrapper: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: specificSize('96%'),
      alignSelf: 'center',
      backgroundColor: '#fefefe',
      borderWidth: 3,
      borderColor: '#ededed',
      height:
        (this.props.items.length + 1) * specificSize(54, 57, 62) +
        specificSize(120),
      maxHeight: DEVICE_HEIGHT * 0.9,
      ...shadowGen(20),
    },

    header: {
      width: '100%',
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },

    item: {
      width: '100%',
      height: specificSize(50, 53, 58),
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderColor: '#f9f9f9',
    },
  };

  render() {
    const {
      items,
      width,
      keyName,
      itemsStyle,
      searchEnable,
      itemTextProps,
      onSelectValue,
      contentContainerStyle,
    } = this.props;

    const {listItems, searchText, selectedItem} = this.state;

    return (
      <>
        <View>
          <XTextInput
            bordered
            editable={false}
            value={selectedItem?.title || ''}
            {...this.props}
          />
          <TouchableOpacity
            onPress={() => {
              this.setState({showList: true});
            }}
            style={{
              ...this.styles.touchable,
              width:
                width ||
                specificSize(
                  DEVICE_WIDTH * 0.85,
                  DEVICE_WIDTH * 0.7,
                  DEVICE_WIDTH * 0.4,
                ),
            }}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showList}
          onRequestClose={() => {
            this.setState({showList: false});
          }}>
          <XSafeContainer bgColor="transparent">
            <Separator />
            <View style={{...this.styles.wrapper, ...contentContainerStyle}}>
              <View style={this.styles.header}>
                <XButton
                  onPress={() => {
                    this.setState({
                      showList: false,
                      listItems: items,
                      searchText: '',
                    });
                  }}
                  circle
                  radius={50}
                  leftAlign
                  label={{text: 'انصراف', color: '#f77', size: 12}}
                  bgColor="transparent"
                  shadow={0}
                />
              </View>
              {searchEnable && (
                <XTextInput
                  bordered
                  rounded
                  disableErrText
                  onChangeText={(text) => {
                    const input = text.trim();
                    this.setState({searchText: input});
                    let listItems = [];
                    items.map((item) => {
                      if (item[`${keyName}`].includes(input)) {
                        listItems.push(item);
                      }
                    });
                    this.setState({listItems});
                  }}
                  placeholder="جستجو کنید"
                  iconLeftPress={() => {
                    searchText.length !== 0
                      ? this.setState({listItems: items, searchText: ''})
                      : null;
                  }}
                  iconLeft={
                    searchText.length !== 0
                      ? {
                          type: 'ion',
                          name: 'ios-close-outline',
                          size: 25,
                        }
                      : null
                  }
                  iconRight={{
                    type: 'ion',
                    name: 'md-search-outline',
                    flip: true,
                  }}
                />
              )}

              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: getBottomSpace()}}>
                {listItems &&
                  listItems.map((item, index) => (
                    <TouchableOpacity
                      key={index + ''}
                      onPress={() => {
                        onSelectValue && onSelectValue(item);
                        this.setState({
                          listItems: items,
                          selectedItem: item,
                          showList: false,
                          searchText: '',
                        });
                      }}
                      style={{...this.styles.item, ...itemsStyle}}>
                      <XText numberOfLines={1} {...itemTextProps}>
                        {item[`${keyName}`]}
                      </XText>
                    </TouchableOpacity>
                  ))}
              </ScrollView>
            </View>
          </XSafeContainer>
        </Modal>
      </>
    );
  }
}

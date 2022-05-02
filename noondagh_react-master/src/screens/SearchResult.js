import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import BoxProduct from '../components/BoxProduct';
import XEmptyScreenComponent from '../components/XEmptyScreenComponent';
import {XContainerScroll} from '../components/XPublics';
import {bread} from '../constants/ConstAray';
import {specificSize} from '../functions/styleFuncs';

export default function SearchResult({result}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading)
    return (
      <View style={{marginTop: 40}}>
        <XEmptyScreenComponent loading={isLoading} />
      </View>
    );
  return (
    <XContainerScroll>
      <View
        style={{
          flex: 1,
          marginHorizontal: 2,
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        {result.length > 0 && !isLoading ? (
          <FlatList
            numColumns={2}
            data={result}
            inverted
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index + ''}
            renderItem={({item, index}) => (
              <BoxProduct width={170} item={item} index={index} />
            )}
          />
        ) : (
          <View
            style={{
              flex: 1,
              height: specificSize(150, 170, 190),
            }}>
            <XEmptyScreenComponent msg />
          </View>
        )}
      </View>
    </XContainerScroll>
  );
}
const styles = StyleSheet.create({
  contentContainer: {alignSelf: 'flex-end', padding: specificSize(5, 8, 11)},
});

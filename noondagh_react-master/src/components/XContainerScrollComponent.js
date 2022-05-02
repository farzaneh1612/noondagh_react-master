import React from 'react';
import {ScrollView} from 'react-native';

const XContainerScrollComponent = (props) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow: 1, paddingVertical: 10}}
    keyboardDismissMode="interactive"
    {...props}>
    {props.children}
  </ScrollView>
);

export default XContainerScrollComponent;

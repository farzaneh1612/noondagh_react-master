import React, {useRef} from 'react';
import {ScrollView} from 'react-native';

const XInvertedScrollViewComponent = (props) => {
  const list = useRef();

  const scrollContentStyle = {
    flexGrow: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
  };

  return (
    <ScrollView
      {...props}
      ref={list}
      contentContainerStyle={{
        ...scrollContentStyle,
        ...props.contentContainerStyle,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onLayout={() => list.current.scrollToEnd({animated: true})}
      onContentSizeChange={() => list.current.scrollToEnd({animated: true})}>
      {props.children}
    </ScrollView>
  );
};

export default XInvertedScrollViewComponent;

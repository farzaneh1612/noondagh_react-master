import React, {useRef, useState} from 'react';
import {View, Animated, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import XButton from './XButtonComponent';
import WebView from './WebView';
let webViewHeight = 0;
export default function DropDownWebView(props) {
  const {
    moreButtonPress,
    initialHeight,
    bgColor,
    style,
    buttonBgColor,
    buttonLabelColor,
    body,
    link,
  } = props;

  const [gradientZIndex, setGradientZIndex] = useState(2);
  const [isShowMore, setIsShowMore] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [initial_height] = useState(initialHeight || 180);
  const [showLinkButton, setShowLinkButton] = useState(false);

  const webViewContainerHeight = useRef(new Animated.Value(initial_height))
    .current;

  const openMore = () => {
    Animated.timing(webViewContainerHeight, {
      toValue: webViewHeight + 70,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setShowLinkButton(true);
      setIsShowMore(true);
      setGradientZIndex(0);
    });
  };

  const closeMore = () => {
    setShowLinkButton(false);
    Animated.timing(webViewContainerHeight, {
      toValue: initialHeight,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setIsShowMore(false);
      setGradientZIndex(2);
    });
  };

  const styles = {
    linearGradient: {
      width: '100%',
      height: '30%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: gradientZIndex,
    },
  };

  return (
    <View>
      <Animated.View
        style={[
          initialHeight && {height: webViewContainerHeight},
          {
            backgroundColor: bgColor || '#fefefe',
          },
          style,
        ]}>
        {initialHeight && showButton && (
          <LinearGradient
            colors={
              isShowMore
                ? ['#ffffff11', '#ffffff11', '#ffffff11']
                : ['#ffffff22', '#ffffffaa', '#ffffffee']
            }
            style={styles.linearGradient}
          />
        )}
        <WebView
          scrollEnabled={false}
          contentStyle={'padding-top:3px'}
          onSizeUpdated={(e) => {
            webViewHeight = e.height;
          }}
          onLoadEnd={() => {
            if (initialHeight && webViewHeight >= initial_height) {
              setShowButton(true);
            } else {
              if (!initialHeight) {
                setShowLinkButton(true);
              }
              setShowButton(false);
            }
          }}
          body={body}
          {...props}
        />
        {link && showLinkButton && (
          <View style={{marginVertical: 10}}>
            <XButton
              shadow={3}
              onPress={() => Linking.openURL(decodeURI(link))}
              width={250}
              height={30}
              colorTheme="#d44"
              borderColor="#fdd"
              bgColor="#fefefe"
              bordered
              label={'برای مشاهده در سایت کلیک کنید'}
              iconRight={{name: 'link-variant', color: '#d44', size: 25}}
            />
          </View>
        )}
      </Animated.View>
      {initialHeight && showButton ? (
        <XButton
          style={{width: '100%'}}
          // width="100%"
          notRadius
          notMargin
          labelColor={buttonLabelColor || '#555'}
          bgColor={buttonBgColor || '#f7f8fe'}
          onPress={() => {
            moreButtonPress && moreButtonPress(isShowMore);
            isShowMore ? closeMore() : openMore();
          }}
          label={isShowMore ? 'بستن' : 'مطالعه بیشتر'}
          iconLeft={{
            color: '#555',
            size: 12,
            name: isShowMore ? 'minus' : 'plus',
          }}
        />
      ) : null}
    </View>
  );
}

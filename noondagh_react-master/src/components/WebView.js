import React, {useEffect} from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

export default function WebView(props) {
  const {
    body,
    style,
    source,
    baseUrl,
    fontSize,
    fontColor,
    lineHeight,
    contentStyle,
    scrollEnabled,
    onLoadEnd,
  } = props;

  const base_url = baseUrl || '';
  const content_style = contentStyle ? contentStyle : 'padding:0px;margin:0px';
  const font_size = fontSize ? `${fontSize}` : '14px';
  const font_color = fontColor ? `${fontColor}` : '#555';
  const line_height = lineHeight ? `${lineHeight}` : '2';
  const font_url =
    Platform.OS === 'ios'
      ? 'IRANYekanWebFn.ttf'
      : 'file:///android_asset/fonts/IRANYekanWebFn.ttf';

  const styles = {
    webView: {
      width: '100%',
      alignSelf: 'center',
    },
  };

  useEffect(() => {}, []);
  return (
    <AutoHeightWebView
      scrollEnabled={scrollEnabled || false}
      style={[styles.webView, style]}
      startInLoadingState={props.startInLoadingState || true}
      renderLoading={
        props.renderLoading ||
        (() => <ActivityIndicator style={{flex: 1}} color="red" size="large" />)
      }
      source={
        source || {
          baseUrl: base_url,
          html: `
            <html>
              <head>
                <style>
                @font-face {
                  font-family: myFirstFont;
                  src: local('IRANYekanWebFn'), url('${font_url}') format("truetype");
                }
                  * {
                    font-size: ${font_size} !important;
                    color: ${font_color} !important;
                    line-height: ${line_height} !important;
                    font-family: myFirstFont !important;
                    background:transparent !important;
                  }

                  body {
                    direction:rtl !important; 
                    text-align:justify !important; 
                    font-family: myFirstFont !important;
                  }

                  a {
                    text-decoration:none !important;
                    pointer-events: none !important;
                  }
                  
                </style>
              </head>
              <body>
                <p style="${content_style}; text-align:justify !important; font-family: myFirstFont !important;">
                    ${body}
                </p> 
              </body>
            </html>
          `,
        }
      }
      scalesPageToFit={props.scalesPageToFit || false}
      viewportContent={'width=device-width, user-scalable=no'}
      onLoadEnd={onLoadEnd}
      {...props}
    />
  );
}

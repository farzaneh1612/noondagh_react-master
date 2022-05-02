import React from 'react';
import XBadgeComponent from './XBadgeComponent';
import XButtonComponent from './XButtonComponent';
import XIconComponent from './XIconComponent';
import XImageComponent from './XImageComponent';
import XTextComponent from './XTextComponent';
import XTextInputComponent from './XTextInputComponent';
import XContainerComponent from './XContainerComponent';
import XContainerScrollComponent from './XContainerScrollComponent';
import XSafeContainerComponent from './XSafeContainerComponent';
import XCenterContainerComponent from './XCenterContainerComponent';
import XInvertedScrollViewComponent from './XInvertedScrollViewComponent';
import XEmptyScreenComponent from './XEmptyScreenComponent';

const XSafeContainer = (props) => <XSafeContainerComponent {...props} />;

const XContainer = (props) => <XContainerComponent {...props} />;

const XCenterContainer = (props) => <XCenterContainerComponent {...props} />;

const XContainerScroll = (props) => <XContainerScrollComponent {...props} />;

const XBadge = (props) => <XBadgeComponent {...props} />;

const XIcon = (props) => <XIconComponent {...props} />;

const XText = (props) => <XTextComponent {...props} />;

const XTextInput = (props) => <XTextInputComponent {...props} />;

const XButton = (props) => <XButtonComponent {...props} />;

const XImage = (props) => <XImageComponent {...props} />;

const XInvertedScrollView = (props) => (
  <XInvertedScrollViewComponent {...props} />
);

const XEmptyScreen = (props) => <XEmptyScreenComponent {...props} />;

export {
  XSafeContainer,
  XContainer,
  XContainerScroll,
  XCenterContainer,
  XBadge,
  XIcon,
  XText,
  XTextInput,
  XButton,
  XImage,
  XInvertedScrollView,
  XEmptyScreen,
};

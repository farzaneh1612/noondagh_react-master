import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export const push = (screenName, params) => {
  navigationRef.current?.dispatch(StackActions.push(screenName, params));
};

export const navigate = (screenName, params) => {
  navigationRef.current?.navigate(screenName, params);
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

export const pop = (count = 1) => {
  navigationRef.current?.dispatch(StackActions.pop(count));
};

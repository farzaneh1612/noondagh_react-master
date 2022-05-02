import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './src/functions/navFuncs';
import {RecoilRoot} from 'recoil';

import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';

import productDetails from './src/screens/ProductDetails';
import ShoppingList from './src/screens/ShoppingList';
import AddressList from './src/screens/AddressList';

import LogIn from './src/screens/LogIn';
import Profile from './src/screens/Profile';
import Account from './src/screens/drawer/Account';
import Orders from './src/screens/drawer/Orders';
import SearchResult from './src/screens/SearchResult';

import EditTextInputOfAccount from './src/screens/EditTextInputOfAccount';
import ResetPassword from './src/screens/ResetPassword';
import GetAuthenticationCode from './src/screens/GetAuthenticationCode';
import SetPassword from './src/screens/SetPassword';

import ToolTipContext, {toolTipVisible} from './src/stores/TooltipContext';
import {getData} from './src/functions/functions';
import AboutUs from './src/screens/drawer/AboutUs';
import ConnectUs from './src/screens/drawer/ConnectUs';
import DrawerContent from './src/screens/drawer/DrawerContent';
import Setting from './src/screens/drawer/Setting';
import Question from './src/screens/drawer/Question';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {duration: 0},
          },
          close: {
            animation: 'timing',
            config: {duration: 0},
          },
        },
        detachPreviousScreen: false,
        cardStyle: {backgroundColor: '#00000000'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
          // overlayStyle: {
          //   opacity: progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [0, 1],
          //     extrapolate: 'clamp',
          //   }),
          // },
        }),
      }}
      mode="modal">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SearchResult" component={SearchResult} />

      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen
        name="EditTextInputOfAccount"
        component={EditTextInputOfAccount}
      />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen
        name="GetAuthenticationCode"
        component={GetAuthenticationCode}
      />
      <Stack.Screen name="SetPassword" component={SetPassword} />

      <Stack.Screen name="ProductDetails" component={productDetails} />
      <Stack.Screen name="AddressList" component={AddressList} />

      <Stack.Screen name="ShoppingList" component={ShoppingList} />

      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="ConnectUs" component={ConnectUs} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Question" component={Question} />
    </Stack.Navigator>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="MainStackNavigator"
      drawerPosition="right"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          drawerLabel: 'خانه',
        }}
        overlayColor="transparent"
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const [toolTip, setTooltip] = useState(toolTipVisible);
  getData('toolTipDisplay').then((e) => {
    console.log('e', e);
    setTooltip(e);
  });
  return (
    <RecoilRoot>
      <ToolTipContext.Provider value={{toolTip, setTooltip}}>
        <NavigationContainer ref={navigationRef}>
          <MyDrawer />
        </NavigationContainer>
      </ToolTipContext.Provider>
    </RecoilRoot>
  );
}

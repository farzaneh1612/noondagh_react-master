import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AsyncStorage.removeItem('toolTipDisplay');
AppRegistry.registerComponent(appName, () => App);

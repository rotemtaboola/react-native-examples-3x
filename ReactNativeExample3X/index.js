/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Taboola} from '@taboola/rnt-dev'

//init Taboola with publisher ID
Taboola.init('sdk-tester-demo');

AppRegistry.registerComponent(appName, () => App);

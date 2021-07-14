import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

// You can import from local files
import Homescreen from './screens/homescreen'
import Buzzerscreen from './screens/buzzerscreen'

export default class App extends React.Component {
  render(){
  return (
    <View>
   <AppContainer/>   
    </View>
  );
}
}

var AppNavigator = createSwitchNavigator({
  Homescreen:Homescreen,
  Buzzerscreen:Buzzerscreen,
});
const AppContainer = createAppContainer(AppNavigator)

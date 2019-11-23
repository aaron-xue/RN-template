/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  AppState,
  StatusBar
} from 'react-native';
import AppContainer from './navigation/navigators.js';
import CodePush from 'react-native-code-push'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  componentDidMount() {
    AppState.addEventListener("change", (newState) => {
      newState === "active" && CodePush.checkForUpdate().then(
        (update) => {
          if (update) {
            //CodePush.sync();
          } else {
            console.log('已经是最新版本');
          }
        });
    });
  }
  render() {
    return <AppContainer screenProps={{ statusBarHeight: StatusBar.currentHeight}}/>;
  }
}

//输出类
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };
App = CodePush(codePushOptions)(App);

export default App;

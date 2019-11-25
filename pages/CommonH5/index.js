import React from 'react'
import { WebView } from 'react-native-webview';
import BasePage from "../BasePage";

export default class ScreenA extends BasePage {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props
    console.log(navigation.getParam('url'))
    return (
        <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>This is a static HTML source!</h1>' }}
      />
    )
  }
}
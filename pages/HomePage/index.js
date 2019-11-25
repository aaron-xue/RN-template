import React from 'react'
import { Button, View } from 'react-native'
import BasePage from "../BasePage";
import DeviceInfo from 'react-native-device-info';


export default class ScreenA extends BasePage {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props
    console.log(this.props.Android_SDK_INT)
    console.log( DeviceInfo.getUniqueId())
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Button title='To Screen B' onPress={() => navigation.navigate('CommonH5',{url:'http://stage.shenzhoubb.com/app/edm/email-20190801.html?v=111'})} />
        <Button title='Open Modal Screen E' onPress={() => navigation.navigate('ScreenE')} />
      </View>
    )
  }
}
import React from 'react'
import { Button, View } from 'react-native'
import BasePage from "../BasePage";

export default class ScreenA extends BasePage {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Button title='To Screen B' onPress={() => navigation.navigate('ScreenB')} />
        <Button title='Open Modal Screen E' onPress={() => navigation.navigate('ScreenE')} />
      </View>
    )
  }
}
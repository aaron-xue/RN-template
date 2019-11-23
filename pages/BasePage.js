import React, { Component } from 'react';
import { StatusBar } from 'react-native'


export default class BasePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar
                    translucent={true}
                />
                {this.renderContent()}
            </View>
        )
    }
    renderContent(){
        return null
    }
} 
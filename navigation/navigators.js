import React from 'react';
import routes from "./routes";
import {
    createAppContainer
} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { pTd } from '../utils/screenAdapter';



let headerCon = {
    initialRouteName: 'HomePage',
    mode: 'card',
    headerMode: 'screen',
    defaultNavigationOptions: ({ navigation, screenProps }) => {
        console.log(screenProps)
        return {
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
              flex: 1,
              textAlign: 'center',
              fontSize: pTd(36)
            },
            headerStyle: {
                // add code start
                paddingTop: screenProps.statusBarHeight,
                height: pTd(88) + screenProps.statusBarHeight, // 88 为设计稿header高度
                // add code end
                elevation: 0,
                backgroundColor: '#4285F4',
                borderBottomColor: '#ccc',
                //   borderBottomWidth: StyleSheet.hairlineWidth
            },
            // headerLeft: <HeaderButton onPress={() => { navigation.goBack() }} source={require('../res/imgs/header-back.png')} />,
            // headerRight: <HeaderButton onPress={() => { Alert.alert('Alert Title', 'alertMessage') }} source={require('../res/imgs/header-info.png')} />
        }
    },
    // transitionConfig: () => ({
    //   screenInterpolator: StackViewStyleInterpolator.forHorizontal
    // })
}

const AppNavigator = createStackNavigator(routes, headerCon)

export default createAppContainer(AppNavigator)
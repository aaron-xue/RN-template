import React from 'react';
import {
    Button,
    View,
    Text
} from 'react-native';
import {
    createAppContainer
} from 'react-navigation';
import { createStackNavigator  } from "react-navigation-stack";
import HomePage from "../pages/HomePage";

const AppNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:(props)=>{            //定义每个页面的导航属性
            return {
                title:'',
                headerRight:(
                    <Button title="保存"></Button>
                )
            }
        }
    }
})

export default createAppContainer(AppNavigator)
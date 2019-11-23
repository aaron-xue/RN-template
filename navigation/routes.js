import HomePage from "../pages/HomePage";
import React from 'react';
import {
    Button,
    View,
    Text
} from 'react-native';

export default {
    HomePage:{
        screen:HomePage,
        navigationOptions:(props)=>{            //定义每个页面的导航属性
            return {
                // title:'',
                headerRight:(
                    <Button title="保存"></Button>
                )
            }
        }
    }
}
import React,{Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { CustomSideBarMenu } from "./CustomSideBarMenu";

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen : AlarmScreen
    },
},

{
    contentComponent : CustomSideBarMenu
},

{
    initialRouteName : 'Home'
}

)
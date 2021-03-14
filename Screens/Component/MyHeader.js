import React,{Component} from 'react';
import {Header} from 'react-native-elements';
import {View,Text,StyleSheet} from 'react-native';


const MyHeader = props=>{
    return(
        <Header centerComponent = {{text:props.Title,style:{color:'orange',fontSize:20,fontWeight:'bold'}}}
        backgroundColor = 'navy'
        />
    )
}
export default MyHeader;
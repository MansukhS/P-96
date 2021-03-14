import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {DrawerItems }from 'react-nagivation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.drawerItemsContainer}>
                 <DrawerItems{...this.props}/>
                </View>

                <View style = {styles.logoutContainer}>
                    <TouchableOpacity 
                    onPress ={()=>{
                        this.props.navigation.navigate('WelcomeScreen');
                        firebase.auth().signOut();
                    }}
                    style = {styles.logoutButton}>
                        <Text style = {styles.logoutText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
   },
   drawerItemsContainer:{
       flex:0.8,
   },
   logoutContainer:{
       flex:0.2,
       justifyContent:'flex-end',
       paddingBottom:30

   },
   logoutButton:{
      height:30,
       justifyContent:'center',
       padding:10,
       width:'100%'
   },
   logoutText:{
       fontSize:30,
       fontWeight:'bold'
   }
}); 
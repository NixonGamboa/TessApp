import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function PushButton (props){
  	return(
		
      <TouchableOpacity
        style = {styles.button}
        onPress = {props.onPress}
        activeOpacity = {0.8}
        hitSlop = {{left:5,top:5,bottom: 5,right: 5,}} >
          <Text style ={styles.buttonTxt} >{props.txt}</Text> 
      </TouchableOpacity>
          
    )}

const styles=StyleSheet.create({

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 140,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: '#15aebb',
  },
  buttonTxt:{
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontStyle: 'italic', 
    fontWeight:'bold',
    color: '#fff',
    textAlign: 'center' ,
    textAlignVertical:'center',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowColor: '#000',
    textShadowRadius: 3,
  },
})

export default PushButton;
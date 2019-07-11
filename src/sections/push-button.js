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
    backgroundColor: '#362779',
  },
  buttonTxt:{
    fontSize: 18,
    fontFamily: 'serif',
    fontStyle: 'italic', 
    color: '#fff',
    textAlign: 'center' ,
    textAlignVertical:'center',
  },
})

export default PushButton;
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function Buttons (props){
  	return(
		<View style={styles.buttonContainer}>
          <TouchableOpacity
            style = {styles.button}
            onPress = {props.onPressAddMore}
            activeOpacity = {0.8}
            hitSlop = {{left:5,top:5,bottom: 5,right: 5,}} >
              <Text style ={styles.buttonTxt} >Añadir +</Text> 
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.button}
            onPress = {props.onPressContinue}
            activeOpacity = {0.8}
            hitSlop = {{left:5,top:5,bottom: 5,right: 5,}} >
              <Text style ={styles.buttonTxt} >Continuar</Text> 
          </TouchableOpacity>
        </View>
    )}

const styles=StyleSheet.create({

buttonContainer:{
    width: '100%',
    height:64,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 140,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 28,
    borderColor: '#00ff0077',
    backgroundColor: 'green',
  },
  buttonTxt:{
    fontSize: 24,
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

export default Buttons;
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import PushButton from '../../../sections/push-button';

function Buttons (props){
  	return(
		<View style={styles.buttonContainer}>
      <PushButton
        txt='Añadir +'
        onPress = {props.onPressAddMore} />
      <PushButton
        txt='Continuar'
        onPress = {props.onPressContinue} />
    </View>
  )}

const styles=StyleSheet.create({

buttonContainer:{
    width: '100%',
    height:56,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
})

export default Buttons;
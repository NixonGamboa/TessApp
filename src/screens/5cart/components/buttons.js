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
    height:64,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
  },
})

export default Buttons;
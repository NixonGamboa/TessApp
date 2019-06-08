import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity } from 'react-native';

import PushButton from '../../../sections/push-button';


function ILikeButton (props) {
    return (
      <View style={styles.container} >
      	<PushButton
        txt='Lo Quiero!'
        onPress = {props.onPress} />
      </View>
    )}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		height:64,
		alignItems:'flex-end',
		justifyContent: 'center',
	},
});

export default ILikeButton;
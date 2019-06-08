import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import PushButton from '../../../sections/push-button';

function Form (props){
  return(
      <View style={styles.container} >
        
        <View style={styles.subtitleContainer}>
          <Text style={styles.txt}>{props.txt}</Text>
        </View>
        
        <View style={styles.followContainer}>
          <Text style={styles.txt}>Siguenos en:</Text>
          <View style={styles.icons}>
            <Image style={styles.icon}
              source={require('../../../../assets/icons/facebook.png')} />
            <Image style={styles.icon}
              source={require('../../../../assets/icons/instagram.png')} />
            <Text style={styles.txt}>@TessApp</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PushButton
            txt='Inicio'
            onPress = {props.handlePress} />
        </View>
      
      </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent:'space-between',
    alignItems: 'center',
    borderWidth: 2,
  },
  subtitleContainer:{
    flex:1,
    width: '90%',
    paddingTop: 32,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  txt:{
    fontSize: 24,
    fontFamily: 'sans-serif',
    fontStyle: 'italic', 
    color: '#fff',
    textAlign:'left', 
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: '#000',
    textShadowRadius: 2,
  },
  followContainer:{
    flex:1,
    width: '100%',
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  icons:{
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
  },
  icon:{
    height: 56,
    width: 56,
    margin:8,
    resizeMode: 'contain',
  },
  buttonContainer:{
    width: '100%',
    height:64,
    alignItems:'flex-end',
    justifyContent: 'center',
  },
})

      

export default Form;
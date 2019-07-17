import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import PushButton from '../../../sections/push-button';

function ProfileEmpty (props){
  return(
      <View style={styles.containerTotal}>
        <View style={styles.container} >
          
          <View style={styles.textContainer}>
            <Text style={styles.nameTxt}>Sin Usuario</Text>
            <Text style={styles.emailTxt}>Sin email</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PushButton
            txt='Iniciar Sesion'
            onPress = {props.toLogin} />
        </View>
      </View>
  )
}
const styles=StyleSheet.create({
  containerTotal:{
    flex:1,
    padding: 8,
    alignItems: 'center',
  },
  container:{
    flex:1,
    padding: 8,
    justifyContent:'center',
    alignItems: 'center',
  },
  photoContainer:{
    //flex:1,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden', 
    margin: 8,
    borderColor: '#362779',
    borderWidth: 2,
  },
  photo:{
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  textContainer:{
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  nameTxt:{
    fontSize: 20,
    fontFamily: 'serif',
    fontStyle: 'italic', 
    color: '#000',
    textAlign:'center', 
  },
  emailTxt:{
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontStyle: 'italic', 
    color: '#362779',
    textAlign:'center', 
  },
  buttonContainer:{
    width: '100%',
    height:40,
    alignItems:'flex-end',
    justifyContent: 'center',
  },
})
export default ProfileEmpty;
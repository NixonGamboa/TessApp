import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import PushButton from '../../../sections/push-button';

function Form (props){
  return(
      <View style={styles.container} >
        <Image style={styles.logo}
          source={require('../../../../assets/diseno/logo-login.png')} />
        <View style={styles.subtitleContainer}>
          <Text style={styles.txt}>{props.txt}</Text>
        </View>
        
        <View style={styles.followContainer}>
          <Text style={styles.txtSiguenos}>Siguenos en:</Text>
          <View style={styles.icons}>
            <Image style={styles.icon}
              source={require('../../../../assets/icons/facebook.png')} />
            <Image style={styles.icon}
              source={require('../../../../assets/icons/instagram.png')} />
            <Text style={styles.txt}>@Detallitos</Text>
          </View>
        </View>

        
      
      </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  subtitleContainer:{
    flex:1,
    width: '90%',
    paddingTop: 32,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  txt:{
    width: '100%',
    fontSize: 16,
    fontFamily: 'serif',
    fontStyle: 'italic', 
    color: '#000',
    textAlign:'justify',
  },
  txtSiguenos:{
    width: '100%',
    fontSize: 16,
    fontFamily: 'serif',
    fontStyle: 'italic', 
    color: '#000',
    textAlign:'justify',
    color: '#362779',
  },
  followContainer:{
    flex:1,
    width: '90%',
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingLeft: 8,
  },
  icons:{
    marginTop: 8,
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
  },
  logo:{
    height: 300,
    width: '80%',
    margin:8,
    resizeMode: 'contain',
  },
  icon:{
    height: 40,
    width: 40,
    margin:8,
    resizeMode: 'contain',
  },
})

      

export default Form;
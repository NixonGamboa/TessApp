import React from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native';

function GButton (props){
  	return(
		  <TouchableOpacity
        style ={styles.container}
        onPress = {props.onSkip}
        activeOpacity = {0.8}
        hitSlop = {{left:5,top:5,bottom: 5,right: 5,}} >
          <Image
            source={require('../../../../assets/diseno/skip.png')}
            style ={styles.background} />
      </TouchableOpacity>
          
    )}

const styles=StyleSheet.create({

  container:{
    position:'absolute',
    right: 24,
    top:32,
    height: 28,
    width: '20%',
    alignItems: 'center',

  },
 background:{
    height: '100%',
    width: '100%',
    resizeMode:'contain',


  },
  
})

export default GButton;
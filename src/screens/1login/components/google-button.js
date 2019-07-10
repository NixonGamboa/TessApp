import React from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native';

function GButton (props){
  	return(
		  <TouchableOpacity
        style ={styles.container}
        onPress = {props.onPress}
        activeOpacity = {0.8}
        hitSlop = {{left:5,top:5,bottom: 5,right: 5,}} >
          <Image
            source={require('../../../../assets/diseno/googleButton.png')}
            style ={styles.background} />
          
      </TouchableOpacity>
          
    )}

const styles=StyleSheet.create({

  container:{
    position:'absolute',
    bottom: '14%',
    height: 50,
    width: '56%',
    alignItems: 'center',
    //left:0,
    //top:0,

  },
 background:{
    height: '100%',
    width: '100%',
    resizeMode:'contain',


  },
  
})

export default GButton;
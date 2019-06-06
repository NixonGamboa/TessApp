import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';

function LayoutView (props){
  return(
    <View style={styles.container} >
      <ImageBackground 
      source={require('../../../assets/images/back1.jpg')}
      style ={styles.background} >
        {props.children}
          </ImageBackground>

    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#4c4c4c22',
  },
  background:{
    width: '100%',
    height: '100%',
  },
})

export default LayoutView;
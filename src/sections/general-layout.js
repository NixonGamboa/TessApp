import React from 'react';
import {SafeAreaView, ImageBackground, ScrollView, KeyboardAvoidingView, View, StyleSheet, Dimensions,StatusBar} from 'react-native';
import { Header } from 'react-navigation';

function LayoutView (props){
  return(
    <SafeAreaView style={styles.superContainer} >
      <ImageBackground 
      source={require('../../assets/diseno/layout.jpeg')}
      style ={styles.background} >
        {props.children}
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  superContainer:{
    flex:1,
  },
  background:{
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
  },
  
})

export default LayoutView;
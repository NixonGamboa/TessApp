import React from 'react';
import {SafeAreaView, ImageBackground, ScrollView, KeyboardAvoidingView, View, StyleSheet, Dimensions,StatusBar} from 'react-native';
import { Header } from 'react-navigation';

function LayoutView (props){
  return(
    <View style = {styles.superContainer} >
      <ImageBackground 
        source={require('../../assets/diseno/layout.jpeg')}
        style ={styles.background} >
          <View style={styles.container} >
            {props.children}
          </View>
      </ImageBackground>
    </View>  
  )
}
const styles=StyleSheet.create({
  superContainer:{
    flex:1,
    width: '100%',
    height: '100%',
  },
  background:{
    width: '100%',
    height: '100%',
  },
  container:{
    flex:1,
    height: Dimensions.get('window').height-Header.HEIGHT-StatusBar.currentHeight,
  },
})

export default LayoutView;
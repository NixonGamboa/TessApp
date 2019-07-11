import React from 'react';
import {SafeAreaView, ImageBackground, ScrollView, KeyboardAvoidingView, View, StyleSheet, Dimensions} from 'react-native';
import { Header } from 'react-navigation';

function LayoutView (props){
  return(
    <SafeAreaView style={styles.superContainer} >
      <ImageBackground 
      source={require('../../../../assets/diseno/fondo1.jpg')}
      style ={styles.background} >
        <View 
          style = {styles.containerColor} >
            <View style={styles.container} >
              {props.children}
            </View>
        </View>  
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  superContainer:{
    flex:1,
  },
  background:{
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  containerColor:{
    width: '100%',
    height: '100%',
  },
  container:{
    flex:1,
  },
})

export default LayoutView;
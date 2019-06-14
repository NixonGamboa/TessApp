import React from 'react';
import {ImageBackground, ScrollView, KeyboardAvoidingView, View, StyleSheet, Dimensions} from 'react-native';
import { Header } from 'react-navigation';

function LayoutView (props){
  return(
    <ImageBackground 
    source={require('../../assets/images/back1.jpg')}
    style ={styles.background} >
      <KeyboardAvoidingView 
        behavior='position'
        keyboardVerticalOffset={-190}>
          <ScrollView
            nestedScrollEnabled={true}>
            <View style={styles.container} >
              
              {props.children}

            </View>
          </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  background:{
    width: '100%',
    height: '100%',
  },
  container:{
    flex:1,
    height: Dimensions.get('window').height-Header.HEIGHT-24,
    backgroundColor: '#4c4c4c22',
    borderWidth: 2
  },
})

export default LayoutView;
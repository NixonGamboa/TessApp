import React from 'react';
import {Dimensions, KeyboardAvoidingView, ScrollView, View,  StyleSheet,  ImageBackground} from 'react-native';
import { Header } from 'react-navigation';

function LayoutView (props){
  return(
      <ImageBackground 
        source={require('../../../assets/images/back1.jpg')}
        style ={styles.background} >
          <KeyboardAvoidingView 
            style = { styles.container }
            behavior='position'
            keyboardVerticalOffset={-190}>
            <ScrollView>
              <View style={styles.container} >

                {props.children}
              </View>     
            </ScrollView>
          </KeyboardAvoidingView>
      </ImageBackground>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    height: Dimensions.get('window').height-Header.HEIGHT-32,
    backgroundColor: '#4c4c4c22',
  },
  background:{
    width: '100%',
    height: '100%',
  },
})

export default LayoutView;
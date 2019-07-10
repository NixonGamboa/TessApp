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
    //resizeMode: 'contain'
  },
  containerColor:{
    width: '100%',
    height: '100%',
  },
  container:{
    flex:1,
    height: Dimensions.get('window').height-Header.HEIGHT,
  },
})

export default LayoutView;
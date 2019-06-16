import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dotContainer:{
    position: 'absolute',
    top: 212,
    left: 14, 
    },
  dot:{
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 0,
    backgroundColor: '#fff'
  },
  dotInactive:{
    backgroundColor: '#fff0'
  }
});
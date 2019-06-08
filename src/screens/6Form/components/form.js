import React from 'react';
import {View, StyleSheet, Text, TextInput, Picker, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from "moment";

import PushButton from '../../../sections/push-button';

var dateNow = moment().format('LL');
var maxDate = moment().add(3, 'months').format('LL');

const customStyles={
        dateInput:{
            borderWidth: 0,
            alignItems: 'flex-start',
            paddingLeft: 32,

          },
        dateIcon: {
              position: 'absolute',
              right: 0,
              top: 4,
              marginRight: 8
            },
        dateText: {
            fontSize: 20, 
            fontFamily: 'sans-serif',
            fontStyle: 'italic', 
            color: '#fff',
            textShadowOffset: {
              width: 1,
              height: 1
            },
            textShadowColor: '#000',
            textShadowRadius: 2,
          },
        placeholderText:{
            fontSize: 19, 
            fontFamily: 'sans-serif-light',
            fontStyle: 'italic',
            fontWeight:  '100', 
            color: '#0007',
            textShadowOffset: {
              width: 1,
              height: 1
            },
            textShadowColor: '#000',
            textShadowRadius: 2,
          },
      }

function Form (props){
  return(
      <View style={styles.container} >
        <Text style={styles.subTitle}>Completa tu información.</Text>
        <View style={styles.inputsContainer}>
          <TextInput 
            style={styles.address}
            placeholder='Dirección:'
            placeholderTextColor='#0008'
            //autoFocus={true}
            //blurOnSubmit={true}
            keyboardType='default'
            returnKeyType='next'
            onChangeText={props.onAddressChange} />
            <DatePicker
              style={styles.datePicker}
              date={props.date}
              mode="date"
              placeholder="Fecha de entrega: "
              format="LL"
              minDate={dateNow}
              maxDate={maxDate}
              confirmBtnText="Confirm" //iOS
              cancelBtnText="Cancel"   //iOS
              customStyles={customStyles}
          onDateChange={props.onDateChange}
            />
            <DatePicker
              style={styles.datePicker}
              date={props.time}
              mode="time"
              placeholder="Hora de entrega: "
              format="hh:mm a"
              confirmBtnText="Confirm" //iOS
              cancelBtnText="Cancel"   //iOS
              customStyles={customStyles}
              onDateChange={props.onTimeChange}
            />
            <View style={styles.paymentMethodContainer}>
              <Picker style={styles.holi}
                color={'red'}
               selectedValue={props.paymentMethod}
               onValueChange={props.onPaymentMethod}
               mode={'dialog'} >
                 <Picker.Item label="Selecciona un metodo de pago" value="" />
                 <Picker.Item label="Efectivo" value="cash" />
                 <Picker.Item label="Tarjeta Credito" value="credit_card" />
                 <Picker.Item label="Nequi" value="nequi" />
                 <Picker.Item label="Daviplata" value="daviplata" />
              </Picker>
            </View>
        </View>
        <View style={styles.asd}>
          <PushButton
            txt='Finalizar'
            onPress = {props.handlePress} />
        </View>
      </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent:'space-between',
  },
  subTitle:{
    fontSize: 24,
    textAlign:'left', 
    fontFamily: 'sans-serif',
    color: '#fff',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: '#000',
    textShadowRadius: 2,
    marginTop: 8,
    marginBottom: 8,
  },
  inputsContainer:{
    paddingBottom: 8,
    paddingTop: 8,
  },
  address:{
    height: 52,
    paddingLeft: 32,
    fontSize: 20,
    textAlign:'left',
    textAlignVertical: 'center', 
    fontFamily: 'sans-serif',
    fontStyle: 'italic', 
    color: '#fff',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: '#000',
    textShadowRadius: 2,
    marginVertical: 8,
    width:'100%',
    borderWidth: 2,
    borderColor: '#4c4c4c44',
    backgroundColor: '#0005',

  },
  datePicker:{
    height: 52,
    marginTop: 8,
    marginBottom: 8,
    width:'100%',
    borderWidth: 2,
    borderColor: '#4c4c4c44',
    backgroundColor: '#0004'

  },
  paymentMethodContainer:{
    height: 52,
    paddingLeft: 32,
    marginVertical: 8,
    justifyContent: 'center',
    width:'100%',
    borderWidth: 2,
    borderColor: '#4c4c4c44',
    backgroundColor: '#0004'
  },
  holi:{
    borderWidth: 3
  },
  asd:{
    width: '100%',
    height:64,
    alignItems:'flex-end',
    justifyContent: 'center',
  },
})

export default Form;
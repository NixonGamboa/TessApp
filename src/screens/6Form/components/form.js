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
            fontSize: 18, 
            fontFamily: 'sans-serif',
            fontStyle: 'italic', 
            color: '#000',
            textShadowOffset: {
              width: 1,
              height: 1
            },
            textShadowColor: '#000',
            textShadowRadius: 2,
          },
        placeholderText:{
            fontSize: 16, 
            fontFamily: 'sans-serif',
            fontStyle: 'italic',
            color: '#000a',  
          },
      }

function Form (props){
  return(
      <View style={styles.container} >
        <Text style={styles.subTitle}>Completa tu información.</Text>
        <View style={styles.inputsContainer}>
          <TextInput 
            style={styles.address}
            placeholder='Celular:'
            placeholderTextColor='#0008'
            keyboardType='phone-pad'
            returnKeyType='next'
            onChangeText={props.onCelChange}  >
                {props.celular}
              </TextInput>
          <TextInput 
            style={styles.address}
            placeholder='Dirección:'
            placeholderTextColor='#0008'
            //autoFocus={true}
            //blurOnSubmit={true}
            keyboardType='default'
            returnKeyType='next'
            onChangeText={props.onAddressChange} >
                {props.address}
              </TextInput>
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
                 <Picker.Item label="Transferencia Bancaria" value="bancary_transference" />
                 <Picker.Item label="Efecty" value="efecty" />
                 <Picker.Item label="Daviplata" value="daviplata" />
              </Picker>
            </View>
        </View>
        <View style={styles.pushButton}>
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
    fontSize: 16,
    textAlign:'left', 
    fontFamily: 'sans-serif',
    color: '#000',
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
    height: 50,
    paddingLeft: 32,
    fontSize: 18,
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
    borderColor: '#000',
    backgroundColor: '#0002',

  },
  datePicker:{
    height: 50,
    marginTop: 8,
    marginBottom: 8,
    width:'100%',
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#0002'

  },
  paymentMethodContainer:{
    height: 50,
    paddingLeft: 32,
    marginVertical: 8,
    justifyContent: 'center',
    width:'100%',
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#0002'
  },
  holi:{
    //borderWidth: 3
  },
  pushButton:{
    width: '100%',
    height:64,
    alignItems:'flex-end',
    justifyContent: 'center',
  },
})

export default Form;
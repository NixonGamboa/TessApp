import React, {Component} from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icons from 'react-native-vector-icons/Entypo';


import Login from './src/screens/1login/login-view';
import Home from './src/screens/2home/home';
import Category from './src/screens/3category/category-view';
import Article from './src/screens/4article/product-view';
import Cart from './src/screens/5cart/shopping-view';
import RegisterForm from './src/screens/6Form/register-form-view';
import Finish from './src/screens/7Finish/finish-view';

const AppNavigator = createStackNavigator(
  { Login,
    Home,
    Category,
    Article,
    Cart,
    RegisterForm,
    Finish
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title:'La Mejor App del Mundo',
      headerBackTitle:"Atras", //solo para iOS
      gesturesEnabled:true,
      },
    headerMode:'float',
    cardStyle:{ backgroundColor: 'red'},
    headerLayoutPreset:'center',
    headerTransitionPreset:'uikit',
  }
);

//link para ver los iconos => https://oblador.github.io/react-native-vector-icons/

const TabNavigator = createBottomTabNavigator(
  {
    Profile:{
      screen:RegisterForm,
      navigationOptions:{
        title:'Perfil',
        tabBarIcon: <Icons name={'user'} size={25} color={'#7d2181'} /> ,
      }
    },
    Home:{
      screen:AppNavigator,
      navigationOptions:{
        title:'Inicio',
        tabBarIcon: <Icons name={'shop'} size={25} color={'#7d2181'} /> ,
      }
    },
    Shopping:{
      screen:Cart,
      navigationOptions:{
        title:'Cart',
        tabBarIcon: <Icons name={'shopping-bag'} size={25} color={'#7d2181'} /> ,
      },
    },
    About:{
      screen: Finish,
      navigationOptions:{
        title:'Nosotros',
        tabBarIcon: <Icons name={'trophy'} size={25} color={'#7d2181'} /> ,
      }
    },
    
  },
  { 
    initialRouteName:'Home',
    tabBarPosition: 'top',
    tabBarOptions:{
      activeTintColor:'white',
      activeBackgroundColor:'#7d218155',
      labelStyle: {
        fontSize: 12,
      }
    }
  }
)

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;

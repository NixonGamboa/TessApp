import React, {Component} from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './src/screens/2home/home';
import Category from './src/screens/3category/category-view';
import Article from './src/screens/4article/product-view';
import Cart from './src/screens/5cart/shopping-view';
import RegisterForm from './src/screens/6Form/register-form-view';
import Finish from './src/screens/7Finish/finish-view';
import Login from './src/screens/1login/login-view';
import Verifying from './src/screens/Loading/verifying';
import About from './src/screens/About/about-view';

const AppNavigator = createStackNavigator(
  { Home,
    Category,
    Article,
    Cart,
    RegisterForm,
    Finish
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title:'TessApp',
      headerBackTitle:"Atras", //solo para iOS
      gesturesEnabled:true,
      },

    headerMode:'screen',
    cardStyle:{ backgroundColor: '#47add4'},
    headerLayoutPreset:'center',
    headerTransitionPreset:'uikit',
  }
);
AppNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

//link para ver los iconos => https://oblador.github.io/react-native-vector-icons/

const TabNavigator = createBottomTabNavigator(
  {
    Profile:{
      screen:RegisterForm,
      navigationOptions:{
        title:'Perfil',
        //tabBarIcon: <Icons name={'user'} size={25} color={'#7d2181'} /> ,
      }
    },
    Home:{
      screen:AppNavigator,
      navigationOptions:{
        title:'Inicio',
        //tabBarIcon: <Icons name={'shop'} size={25} color={'#7d2181'} /> ,
      }
    },
    Shopping:{
      screen:Cart,
      navigationOptions:{
        title:'Cart',
        //tabBarIcon: <Icons name={'shopping-bag'} size={25} color={'#7d2181'} /> ,
      },
    },
    About:{
      screen: About,
      navigationOptions:{
        title:'Nosotros',
        //tabBarIcon: <Icons name={'trophy'} size={25}  /> ,
      }
    },
    
  },
  { defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Shopping') {
          iconName = `cart${focused ? '' : '-outline'}`;
        }else if (routeName === 'Profile') {
          iconName = `account-check${focused ? '' : '-outline'}`;
        }else if (routeName === 'About') {
          iconName = `home-city${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={24} color={'#362779'} />;
      },
    }),
    initialRouteName:'Home',
    tabBarOptions:{
      activeTintColor:'#362779',
      //activeBackgroundColor: '#f3f3f355',
      inactiveTintColor:'#4c4c4c',
      //inactiveBackgroundColor: '#f3f3f366',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        borderTopWidth: 1,
        borderTopColor: '#000',
      },
    },
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    App:TabNavigator,
    Login:Login,
    Verify:Verifying,
  },
  {
    initialRouteName:'Verify',
  }  
  )

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;

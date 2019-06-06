import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './src/screens/1login/containers/login.js';
import Home from './src/screens/2home/home';
import Category from './src/screens/3category/vista-categoria';
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
    initialRouteName:'Login',
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

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;

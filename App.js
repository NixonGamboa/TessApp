import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Login from './src/screens/1login/login-view';
import Home from './src/screens/2home/home';
import Category from './src/screens/3category/category-view';
import Article from './src/screens/4article/product-view';
import Cart from './src/screens/5cart/shopping-view';
import RegisterForm from './src/screens/6Form/register-form-view';
import Finish from './src/screens/7Finish/finish-view';

import API from './src/utils/api';
import {store, persistor} from './src/redux/store';

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

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  async componentDidMount(){
    const ads = await API.getAds(10);
    store.dispatch({
      type:'SET_SUGGESTION_LIST',
      payload:{
        ads
      }
    })
    const categories = await API.getCategories();
    store.dispatch({
      type:'SET_CATEGORY_LIST',
      payload:{
        categories
      }
    })
    

  }
  render() {
    return (
      <Provider
        store ={store}
      >
        <PersistGate
          loading={<Text>Holiiiiiii</Text>}
          persistor={persistor} >
            <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

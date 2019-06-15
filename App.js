import React, {Component} from "react";
import {store, persistor} from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import AppNavigator from './app-navigator';
import Load from './src/sections/loading';

import API from './src/utils/api';




class App extends Component {
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
        store ={store} >
        <PersistGate
          loading={<Load/>}
          persistor={persistor} >
            <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

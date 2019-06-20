import React, {Component} from "react";
import {store, persistor} from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import AppNavigator from './app-navigator';
import Load from './src/sections/loading';





class App extends Component {
  
  render() {
    return (
      <Provider
        store ={store} >
            <AppNavigator />
        {/*<PersistGate
          loading={<Load/>}
          persistor={persistor} >
        </PersistGate>*/}
      </Provider>
    );
  }
}

export default App;

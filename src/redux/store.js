import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducer from './reducers/reducer';

const persistConfig = {
  key: 'root',
  storage,
}

const stateInit = {
	userName:'',
	userCel:'',
	userActive:false,
	ads:[],
	categories:[],
}

const persistedReducer = persistReducer(persistConfig,reducer)

const store = createStore(persistedReducer,stateInit)
const persistor = persistStore(store)

export {store, persistor};
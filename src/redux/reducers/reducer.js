import stateInit from '../state-init';

function reducer(state = stateInit, action){
	switch (action.type){
		case 'SET_SUGGESTION_LIST':{
			return{...state, ...action.payload}
		}
		case 'SET_CATEGORY_LIST':{
			return{...state, ...action.payload}
		}
		case 'SET_SELECTED_CATEGORY':{
			return {...state, selectedCategory:action.payload}
		}
		case 'SET_PRODUCT_LIST':{
			return{...state, ...action.payload}
		}
		case 'SET_SELECTED_PRODUCT':{
			return{...state, ...action.payload}
		}
		//estoy aqui!!!!!!!!!!!!!!!!!!
		case 'ADD_TO_CART':{
			return{...state, cart:[...state.cart, action.payload.pr]}
			//M={...M, N:[...M.N, {a:15}]}
		}
		case 'SET_USERNAME':{
			return {...state, user:{...state.user, userName:action.payload.userName} }
		}
		case 'SET_USERCEL':{
			return {...state, user:{...state.user, userCel:action.payload.userCel} }
		}
		case 'SET_ACTIVEUSER':{
			return {...state, user:{...state.user, userActive:action.payload.userActive} }
		}
		case 'SET_USERGOOGLE':{
			return {...state, user:action.payload.user }
		}
		case 'SET_LOGOUT':{
			return {...action.payload.state} 
			//return state = action.payload.state
		}
		default:
			return state;
	}
}

export default reducer;

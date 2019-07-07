import stateInit from '../state-init';

var removeItemFromCart = ( arr, id ) => {
    return arr.filter( obj => obj.key !== id );
};

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
		case 'ADD_NOTE_TO_PRODUCT':{
			return{...state, article:{...state.article, ...action.payload}}
		}
		case 'ADD_TO_CART':{
			return{...state, cart:[...state.cart, action.payload.pr]}
			//M={...M, N:[...M.N, {a:15}]}
		}
		case 'REMOVE_TO_CART':{
			return{...state, cart:removeItemFromCart( state.cart, action.payload.id )}
			//M={...M, N:removeItemFromCart( M.N, itemToDelete.id )}
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

/*
//ASI SE FILTRA UN ELEMENTO DE UN ARRAY CREANDO UNO NUEVO
//SE MUESTRAN DOS FORMAS DIFERENTES, UNA USANDO IF Y OTRA USANDO ARROW FUNCTION 
var arr = [
  { id: 15 },
  { id: '0' },
  { id: 3 },
  { id: '12.2' },
  { id: '404' },
];
var item={ id: '404' }
function filtrarPorID(obj) {
if ('id' in obj && obj.id !== item.id) {
     return true;
  } 
}
var arrPorID = arr.filter(filtrarPorID);

console.log('Filt1 ', arrPorID); 
var removeItemFromArr = ( arr, id ) => {
    return arr.filter( obj => obj.id !== id );
};
var newFoo = removeItemFromArr( arr, item.id );

console.log('Filt2 ', newFoo);
*/
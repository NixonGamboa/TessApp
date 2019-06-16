function reducer(state = {}, action){
	switch (action.type){
		case 'SET_SUGGESTION_LIST':{
			return{...state, ...action.payload}
		}
		case 'SET_CATEGORY_LIST':{
			return{...state, ...action.payload}
		}
		case 'SET_SELECTED_CATEGORY':{
			return {...state, selectedCategory:action.payload.category}
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
		}
		default:
			return state;
	}
}

export default reducer;

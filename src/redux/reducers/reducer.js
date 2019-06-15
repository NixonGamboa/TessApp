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
			return {...state, userName:action.payload.userName }
		}
		case 'SET_USERCEL':{
			return {...state, userCel:action.payload.userCel }
		}
		case 'SET_ACTIVEUSER':{
			return {...state, userActive:action.payload.userActive }
		}
		case 'SET_LOGOUT':{
			return state = action.payload.state
		}
		default:
			return state;
	}
}

export default reducer;

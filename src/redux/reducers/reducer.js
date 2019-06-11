function reducer(state = {}, action){
	switch (action.type){
		case 'SET_SUGGESTION_LIST':{
			return{...state, ...action.payload}
		}
		case 'SET_CATEGORY_LIST':{
			return{...state, ...action.payload}
		}
		case 'SET_SELECTED_CATEGORY':{
			return {...state,selectedCategory:action.payload.category}
		}
		default:
			return state;
	}
}

export default reducer;

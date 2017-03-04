import {ADD_ARTICLE,DELETE_ARTICLE,ADD_LIST_ARTICLES,EDIT_ARTICLE} from '../constants/ActionTypes'

let initialState = []

export default function articles (state=initialState, action){
    switch(action.type){
        case ADD_ARTICLE:
            return [action.data, ...state]
        case ADD_LIST_ARTICLES:
            return [
				...state,
				...action.data
			]
        case EDIT_ARTICLE:
            return state.map(article => {
                return article._id == action.id ?  Object.assign({}, article, action.data) : article
            })
        case DELETE_ARTICLE:
            return state.filter(article => 
                article._id !== action.id
            )
        default: 
            return state
    }
}
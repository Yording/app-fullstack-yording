import {ADD_ARTICLE,DELETE_ARTICLE,ADD_LIST_ARTICLES} from '../constants/ActionTypes'

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
        default: 
            return state
    }
}
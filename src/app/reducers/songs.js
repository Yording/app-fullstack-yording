import {ADD_SONG, DELETE_SONG} from '../constants/ActionTypes'

let initialState = []

export default function songs (state=initialState, action){
    switch(action.type){
        case ADD_SONG:
            return [action.data,...state]
        default:
            return state
    }
}
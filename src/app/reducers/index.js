import {combineReducers} from 'redux';
import songs from './songs';

// Se combinan todos los reducers
const reducer = combineReducers({
  songs
});

export default reducer;

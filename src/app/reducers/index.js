import {combineReducers} from 'redux';
import songs from './songs';
import articles from './articles'

// Se combinan todos los reducers
const reducer = combineReducers({
  songs,
  articles
});

export default reducer;

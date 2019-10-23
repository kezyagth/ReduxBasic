import {combineReducers} from'redux';
import countReducer from './countReducers';
import placeReducer from './placeReducer';
import cityReducers from './cityReducers';
const allReducers = combineReducers({
    count: countReducer,
    listPlaces: placeReducer,
    listCity: cityReducers
});

export default allReducers;
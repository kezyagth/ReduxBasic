import {ADD_PLACE} from '../actions/types';

const initialState = {
    placeName: '',
    places: [] //tampung nilai berapa array
};
const placeReducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key : Math.random(),
                    value: actions.payload
                })
            };
            default:
                return state;
    }
}

export default placeReducer;
import {ADD_CITY} from '../actions/types';

const initialState = {
    city: []
};
const cityReducers = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_CITY:
            return{
                city: state.city.concat({
                    key : Math.random(),
                    value: actions.payload
                })
            };
        default:
            return state;
    }
}

export default cityReducers;
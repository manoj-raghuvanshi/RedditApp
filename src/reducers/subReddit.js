import {FETCH_SUB_REDDITS_START, FETCH_SUB_REDDITS_SUCCESS, FETCH_SUB_REDDITS_FAILURE} from './../constants/actionTypes';

const INIT_STATE = {subReddits: {}}

const subRedditsReducer = (state= INIT_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case FETCH_SUB_REDDITS_START:
            return {...state, selected: action.id, isFetching: true};
        case FETCH_SUB_REDDITS_SUCCESS:
            return {...state, isFetching: false, subReddits: action.data}
        case FETCH_SUB_REDDITS_FAILURE:
            return {...state, isFetching: false}
        default: return state;
    }
}

export default subRedditsReducer;
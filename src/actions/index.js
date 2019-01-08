import {
    FETCH_SUB_REDDITS_START, 
    FETCH_SUB_REDDITS_SUCCESS, 
    FETCH_SUB_REDDITS_FAILURE
} from './../constants/actionTypes';
export const onSubRedditRequest =(id) => ({
    type: FETCH_SUB_REDDITS_START,
    id: id
})

export const onSubRedditSuccess = (subReddit) => ({
    type: FETCH_SUB_REDDITS_SUCCESS,
    data: subReddit
})

export const onSubRedditFailure = (err) => ({
    type: FETCH_SUB_REDDITS_FAILURE,
    error: err
})

export const fetchSubReddit = (name) => {
    return (dispatch) => {
        dispatch(onSubRedditRequest(name))
        return fetch(`https://www.reddit.com/r/${name}.json`)
            .then(res => res.json())
            .then(result => dispatch(onSubRedditSuccess(result.data)))
            .catch(err => dispatch(onSubRedditFailure(err)))
    }
}

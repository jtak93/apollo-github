import {
    IS_FETCHING_REPOS,
    FETCH_REPOS_SUCCESS,
    UPDATE_USERNAME,
    FETCH_REPOS_FAILURE
} from './constants';

const initialState = {
    isFetchingRepos: false,
    fetchRepoSuccess: false,
    repositories: [],
    username: '',
    errors: null,
}

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING_REPOS:
            return {
                ...state,
                isFetchingRepos: true,
                fetchRepoSuccess:false
            }
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                isFetchingRepos: false,
                fetchRepoSuccess: true,
                repositories: action.repositories,
                errors: null
            }
        case FETCH_REPOS_FAILURE:
            return {
                ...state,
                isFetchingRepos: false,
                fetchRepoSuccess: false,
                repositories: [],
                errors: action.errors
            }
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return state;
    }
}

export default githubReducer;

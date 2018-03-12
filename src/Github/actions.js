import {
    IS_FETCHING_REPOS,
    FETCH_REPOS_SUCCESS,
    UPDATE_USERNAME,
    FETCH_REPOS_FAILURE,
} from './constants';

import client from '../modules/apolloClient';
import gql from 'graphql-tag';

function fetchGithubRepos(username) {
    return client.query(
        {
            query: gql
                `query($username: String!){
                    user(login: $username) {
                        repositories(first: 100) {
                            edges {
                                node {
                                    id
                                    name
                                    primaryLanguage {
                                        name
                                    }
                                    url
                                }
                            }
                        }
                    }
                }`,
            variables: {
                username,
            },
            errorPolicy: 'all'
        }
    );
}

function isFetchingRepos() {
    return {
        type: IS_FETCHING_REPOS
    }
}

function fetchReposSuccess(repositories) {
    return {
        type: FETCH_REPOS_SUCCESS,
        repositories
    }
}
function fetchReposFailure(errors) {
    return {
        type: FETCH_REPOS_FAILURE,
        errors,
    }
}

export function fetchRepos() {
    return (dispatch, getState) => {
        dispatch(isFetchingRepos());
        fetchGithubRepos(getState().github.username)
            .then(resp => {
                if (resp.errors) {
                    dispatch(fetchReposFailure(resp.errors))
                } else {
                    if (resp.data.user && resp.networkStatus === 7) {
                        dispatch(fetchReposSuccess(resp.data.user.repositories))
                    }
                }
            })
    };
}

export function updateUsername(username){
    return {
        type: UPDATE_USERNAME,
        username,
    }
}

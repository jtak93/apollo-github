import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GithubActionCreators from './actions';
import _ from 'lodash';
import GithubList from './GithubList';
import GithubListItem from './GithubListItem';

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTyping: false
        }
        this._debouncedFetchRepos = _.debounce(this._debouncedFetchRepos.bind(this), 500);
        this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(e) {
        this.props.updateUsername(e.target.value)
        this._debouncedFetchRepos(this.props.username)
    }

    _debouncedFetchRepos() {
        this.props.fetchRepos(this.props.username);
    }
    render() {
        let errors = []
        if (!!this.props.errors) {
            errors = this.props.errors;
        }
        return (
            <div>
                Enter Username: 
                <input onChange={this._handleInputChange} ref="username" type="text" />
                {
                    errors.length > 0 && !!this.props.username &&
                    <p style={{ color: 'red' }}>{errors[0].message} Please try a valid github username.</p>
                }
                {
                    errors.length === 0 &&
                    (<GithubList>
                        {
                            // Loading Icon 
                            this.props.isFetchingRepos && !!this.props.username &&
                            <li>Loading</li>
                        }
                        { 
                            // Loaded user repos if username is not empty and user inputs a value
                            !!this.props.username && !this.props.isFetchingRepos && !!this.props.fetchRepoSuccess &&
                            this.props.repositories.map(repo => {
                                return <GithubListItem 
                                            key={repo.node.id}
                                            repo={repo.node} />
                            })
                        }
                    </GithubList>)
                }
                {
                    // Load input prompt
                    !this.props.isFetchingRepos && !this.props.username &&
                    <p>Please enter a github user</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetchingRepos: state.github.isFetchingRepos,
        fetchRepoSuccess: state.github.fetchRepoSuccess,
        repositories: state.github.repositories.edges,
        username: state.github.username,
        errors: state.github.errors,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(GithubActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Github)

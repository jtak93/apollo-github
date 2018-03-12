import React from 'react';

class GithubListItem extends React.Component {
    render() {
        let primaryLanguageName = ""
        if (this.props.repo.primaryLanguage) {
            primaryLanguageName = this.props.repo.primaryLanguage.name
        }
        return (
            <li>
                <p>name: <a href={this.props.repo.url} target="_blank">{this.props.repo.name}</a></p>
                {
                    !!this.props.repo.primaryLanguage &&
                    <p>Primary Language: {primaryLanguageName}</p>
                }
                {
                    !this.props.repo.primaryLanguage &&
                    <p>Primary Language: Not specified</p>
                }
            </li>
        )
    }
}

export default GithubListItem;
import React from 'react';

class GithubList extends React.Component {
    render() {
        return (
            <ul style={{ listStyleType: 'none' }}>
                {this.props.children}
            </ul>
        )
    }
}

export default GithubList;
import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => this.props.changePage()}>Go to github list page via redux</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/github')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)

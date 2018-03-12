import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import Github from './Github';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import { ApolloProvider } from 'react-apollo';
import client from "./modules/apolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <header>
                <Link to="/">Home</Link>
                <Link to="/github">Github API</Link>
              </header>

              <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/github" component={Github} />
              </main>
            </div>
          </ConnectedRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;

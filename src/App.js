import React, { Component } from 'react';
import Github from './Github';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from 'react-apollo';
import client from "./modules/apolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Github/>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;

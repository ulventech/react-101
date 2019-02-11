import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Home from '../pages/Home';
import store from '../store';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Header />
          <Home />
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;

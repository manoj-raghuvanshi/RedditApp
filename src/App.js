import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';
import SubReddits from './components/subReddits';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <SubReddits/>
        </div>
      </Provider>
    );
  }
}

export default App;

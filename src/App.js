import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from './store/configureStore';
import { tambahAction, ubahNamaAction } from './actions';

import AgeSection from './components/AgeSection';
import AddAgeButton from './components/AddAgeButton';
import UserInfo from './components/UserInfo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to My Mango Tree</h2>
          </div>
          <div className="App-intro">
            <h1>{ 'udin' } MANGO TREE</h1>
            <AgeSection />
            <br />
            <AddAgeButton />
            <br />
            <UserInfo />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

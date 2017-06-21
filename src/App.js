import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store/configureStore';
import { tambahAction, ubahNamaAction } from './actions';
// console.log(store);

// nangkep state yang ada di store
// console.log(store.getState());

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: store.getState().tree.age,
      name: store.getState().person.name,
      email: store.getState().person.email,
    };

    store.subscribe(() => {
      this.setState({
        age: store.getState().tree.age,
        name: store.getState().person.name,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Mango Tree</h2>
        </div>
        <div className="App-intro">
          <h1>{ `${this.state.name}'s` } MANGO TREE</h1>
          <div style={{ fontSize: 20, margin: 30 }}>
            Age: { this.state.age }
          </div>
          <br />
          <button
            onClick={() => store.dispatch(tambahAction())}
            style={{ padding: 20, fontSize: 20 }}>
            Tambah Umur
          </button>
          <br />
          <p>
            user email: { this.state.email }
          </p>
          <div>
            <input
              type="text"
              placeholder="ubah namamu disini!"
              onChange={(event) => store.dispatch(ubahNamaAction(event.target.value))}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

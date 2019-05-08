
import {Provider} from 'react-redux'
import React, { Component } from 'react';
import Routes from './src/Routes'
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/index'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
class App extends Component {

componentWillMount() {
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHkH3y3ZUdvk3t92MWv17sB4RmkoNakjU",
    authDomain: "biblioteca-658fa.firebaseapp.com",
    databaseURL: "https://biblioteca-658fa.firebaseio.com",
    projectId: "biblioteca-658fa",
    storageBucket: "biblioteca-658fa.appspot.com",
    messagingSenderId: "883802804700"
  };
  firebase.initializeApp(config);
 }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}
export default App;


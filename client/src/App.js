import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Footer from './components/Footer';
import UserContextProvider from './contexts/UserContext';

export default  class App extends Component {

  render() {
    return (
      <div className="App">
        <UserContextProvider>
          <AppHeader/>
          <Main/>
          <Footer/>
        </UserContextProvider>
      </div>
    );
    };
}


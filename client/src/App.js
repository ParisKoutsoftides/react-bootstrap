import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

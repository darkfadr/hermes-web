import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from "./components/sidebar";
import Toolbar from './components/toolbar';
import Email from './components/email';
import logo from './logo.svg';
import './App.css';

const emails = [
  { subject: 'Hello world', to: 'test@gmail.com', opened: false },
  { subject: 'Hello world', to: 'test@gmail.com', opened: true },
  { subject: 'Hello world', to: 'test@gmail.com', opened: false },
  { subject: 'Hello world', to: 'somereally_longnameforaperson@gmail.com', opened: true },
  { subject: '[URGENT] - US - Company Corp - John Doe - Please process this personal record', to: 'test@gmail.com', opened: true },
  { subject: 'Hello world', to: 'test@email.com', opened: false }
] ;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Sidebar emails={emails} />
          <div className="message-view">
            <Toolbar />
            <Email {...emails[4]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

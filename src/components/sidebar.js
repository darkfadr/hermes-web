import React, { Component } from "react";
import moment from 'moment';
import './styles/sidebar.css';


class Message extends Component {
  render(){
    const {subject, to, opened} = this.props;
    return (
      <div className="message">
        <div className='subject'>
          <h4 className="trim">{subject}</h4>
          {opened || <span><i className='fas fa-circle'></i></span>}
        </div>
        <div className="meta">
          <p className="trim">{to}</p>
          <p>{moment().fromNow()}</p>
        </div>
      </div>
    );
  }
}


export default class Sidebar extends Component {
  render(){
    const {emails} = this.props;
    return (
      <div className="sidebar">
        <div className="inbox">
          {emails.map((msg, i) => <Message key={i} {...msg}/>)}
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";
import './styles/toolbar.css';

export default class Toolbar extends Component {
  render(){
    return (
      <div className="toolbar">
        <a><i className="fas fa-info"></i></a> 
        <a><i className="fas fa-download"></i></a> 
        <a><i className="fas fa-trash"></i></a> 
          {/* <a className="download"><i className="fas fa-download"></i></a> */}
      </div>
    )
  }
}
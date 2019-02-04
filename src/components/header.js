import React from "react";
import './styles/header.css';

export default function Header(props) {
  return (
    <header className='header'>
      <h3 className="logo">Hermes</h3>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  )
}
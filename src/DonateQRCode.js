import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

class donateQRCode extends Component {
  render() {
    return (
        <center>
          <h1 style={{marginBottom: '10px'}}>Donate Online</h1>
          <QRCode 
            value="https://www.churchofjesuschrist.org/donations" 
            size={150} 
          />
          <h1 style={{marginTop: '10px'}}>https://lds.org/donations</h1>
        </center>
    );
  }
}

export default donateQRCode;

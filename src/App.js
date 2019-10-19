import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptocurrencies: []
    };
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,EOS,TRX&tsyms=USD')
      .then(res => {
        const cryptocurrencies = res.data;
        console.log(cryptocurrencies);
        this.setState({cryptocurrencies: cryptocurrencies});
      })
  }

  render() {
    const topbanner = {
      color: "white",
      backgroundColor: "RoyalBlue",
      padding: "15px",
      fontFamily: "Verdana"
    };
    return (
      <div className="App">
        <h1 style={topbanner}>ReactJS PWA App</h1>
        <p align="left">The popular Cryptocurrencies are:</p>
        <ol type="1">
          <li>Bitcoin (BTC)</li>
          <li>Ethereum (ETH)</li>
          <li>XRP (XRP)</li>
          <li>EOS (EOS)</li>
          <li>TRON (TRX)</li>
        </ol>

        <p align="left">Here are their current rates:</p>
        {Object.keys(this.state.cryptocurrencies).map((key) => (

          <div id="cryptocurrency-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptocurrencies[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
          </div>

        ))}
        <p align="center"><b>#SoftwareDeveloperCentral @AjTechDeveloper</b></p>
      </div>
    );
  }
}

export default App;

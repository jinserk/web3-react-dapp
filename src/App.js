import React, { Component, Fragment, useStatus, useEffect } from "react";
import Web3Provider, { Connectors, useWeb3Context } from "web3-react";

import { ethers } from 'ethers';
import './App.css';
import { Web3Unavailable, AccountUnavailable } from "./Error";

const { MetaMaskConnector } = Connectors;
const MetaMask = new MetaMaskConnector();
const connectors = { MetaMask };


function MyComponent() {
  const context = useWeb3Context();
  const provider = context.library;

  provider.getBlockNumber().then((value) => {
    console.log(value);
  }).catch((err) => {
    console.log(err);
  });

  return (
    <Fragment>
      <p>Active Connector: {context.connectorName || "None"}</p>
      <p>Account: {context.account || "None"}</p>
      <p>Network ID: {context.networkId || "None"}</p>
    </Fragment>
  );
}

function MetaMaskComponent() {
  const context = useWeb3Context();

  useEffect(() => {
    context.setConnector("MetaMask")
  }, []);

  return (
    <Fragment>
      {context.active ? <MyComponent /> : <Web3Unavailable />}
      {context.error && <p>{context.error.toString()}</p>}
    </Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <Web3Provider connectors={connectors} libraryName="ethers.js">
        <div className="App">
          <MetaMaskComponent />
        </div>
      </Web3Provider>
    );
  }
}

export default App;

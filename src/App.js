import React, { Component } from "react";
import Web3Provider, { Connectors, useWeb3Context } from "web3-react";

import './App.css';
import { Web3Unavailable, AccountUnavailable } from "./Error";

const { MetaMaskConnector } = Connectors;
const MetaMask = new MetaMaskConnector();
const connectors = { MetaMask };

function MyComponent() {
  const context = useWeb3Context();
  const ether = context.library;
  let provider = ether

  React.useEffect(() => {
    context.setConnector("MetaMask")
  }, []);
  console.log(context);

  return (
    <React.Fragment>
      {context.active ? (
        <React.Fragment>
          <p>Active Connector: {context.connectorName || "None"}</p>
          <p>Account: {context.account || "None"}</p>
          <p>Network ID: {context.networkId || "None"}</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Web3Unavailable />
        </React.Fragment>
      )}
      {context.error && <p>{context.error.toString()}</p>}
    </React.Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <Web3Provider connectors={connectors} libraryName="ethers.js">
        <div className="App">
          <MyComponent />
        </div>
      </Web3Provider>
    );
  }
}

export default App;

import React, { Component, Fragment, useEffect } from "react";
import Web3Provider, { Connectors, useWeb3Context } from "web3-react";

import './App.css';
import { Web3Unavailable, AccountUnavailable } from "./Error";

const { InjectedConnector } = Connectors;
const MetaMask = new InjectedConnector();
const connectors = { MetaMask };


function MyComponent() {
  const { active, library, connectorName, account, networkId } = useWeb3Context();

  useEffect(() => {
    if (active) {
      library.getBlockNumber().then((value) => {
        console.log(value);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [active])

  return (
    <Fragment>
      <p>Active Connector: {connectorName || "None"}</p>
      <p>Account: {account || "None"}</p>
      <p>Network ID: {networkId || "None"}</p>
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

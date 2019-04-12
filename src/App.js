import React, { Component, Fragment, useEffect } from "react";
import Web3Provider, { Connectors, useWeb3Context } from "web3-react";

import './App.css';
import { Web3Unavailable, AccountUnavailable } from "./Error";
import NetworkInfo from "./NetworkInfo";
import AccountInfo from "./AccountInfo";

const { InjectedConnector } = Connectors;
const MetaMask = new InjectedConnector();
const connectors = { MetaMask };


function MyComponent() {
  const context = useWeb3Context();

  useEffect(() => {
    context.account || context.unsetConnector("MetaMask");
  }, [context.account]);

  return (
    context.account ? (
      <Fragment>
        <NetworkInfo />
        <br />
        <AccountInfo account={context.account} />
      </Fragment>
    ) : <AccountUnavailable />
  );
}

function MetaMaskComponent() {
  const context = useWeb3Context();

  useEffect(() => {
    context.active || context.setConnector("MetaMask");
  }, [context]);

  return (context.active ? <MyComponent /> : <Web3Unavailable />);
}

export default class App extends Component {
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

import React, { useState, useEffect } from "react";
import { useWeb3Context } from "web3-react";
import { utils } from "ethers";

import './App.css';

export default function NetworkInfo() {
  const context = useWeb3Context();
  const provider = context.library;

  const [blockNumber, setBlockNumber] = useState(0);
  const [gasPrice, setGasPrice] = useState("0");

  useEffect(() => {
    if (provider) {
      provider.getBlockNumber().then((value) => {
        setBlockNumber(value);
      }).catch((err) => {
        console.log(err);
      });
      provider.getGasPrice().then((value) => {
        setGasPrice(utils.formatUnits(value, 9));
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [provider])

  return (
    <div className="App-table">
      <table width="500">
      <caption>Network Info</caption>
        <thead>
        <tr>
          <th>Item</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Network ID</td>
          <td>{context.networkId}</td>
        </tr>
        <tr>
          <td>Block Number</td>
          <td>{blockNumber}</td>
        </tr>
        <tr>
          <td>Gas Price</td>
          <td>{gasPrice} gwei</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}


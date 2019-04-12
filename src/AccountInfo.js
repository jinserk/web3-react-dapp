import React, { useState, useEffect } from "react";
import { useWeb3Context } from "web3-react";
import { utils } from "ethers";

import './App.css';


function TransferETH() {
  const context = useWeb3Context();
  const provider = context.library;
  const signer = provider.getSigner(context.account);

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [gasPrice, setGasPrice] = useState("10");
  const [gasLimit, setGasLimit] = useState("21000");
  const [nonce, setNonce] = useState(0);

  signer.getTransactionCount()
    .then(value => setNonce(value))
    .catch(err => console.error(err));

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let result = window.confirm(
      `You are making a transaction of:
        from : ${context.account}
        to : ${to}
        amount : ${amount} eth
        Gas-price: ${gasPrice} gwei
        Gas-limit: ${gasLimit} units

      Are you sure to go ahead?`
    );

    if (result) {
      let transaction = {
        "to": to,
        "nonce": nonce,
        "gasPrice": utils.parseUnits(gasPrice, 9),
        "gasLimit": utils.bigNumberify(gasLimit),
        "value": utils.parseEther(amount),
        "chainId": context.networkId
      };
      console.log(transaction);

      signer.sendTransaction(transaction).then(tx => {
        console.log(tx);
      }).catch(err => {
        console.error(err);
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table className="inner-table" width="100%">
          <tbody>
          <tr>
            <td className="inner-td" align="right">To:</td>
            <td className="inner-td">
              <input style={{ width: "380px" }} type="text" value={to} onChange={e => setTo(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td className="inner-td" align="right">Amount:</td>
            <td className="inner-td">
              <input type="text" value={amount} onChange={e => setAmount(e.target.value)} /> eth
            </td>
          </tr>
          <tr>
            <td className="inner-td" align="right">Gas Price:</td>
            <td className="inner-td">
              <input type="text" value={gasPrice} onChange={e => setGasPrice(e.target.value)} /> gwei
            </td>
          </tr>
          <tr>
            <td className="inner-td" align="right">Gas Limit:</td>
            <td className="inner-td">
              <input type="text" value={gasLimit} onChange={e => setGasLimit(e.target.value)} /> units
            </td>
          </tr>
          </tbody>
        </table>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default function AccountInfo(props) {
  const context = useWeb3Context();
  const provider = context.library;

  const [ethBalance, setEthBalance] = useState(0);
  const [txModal, setTxModal] = useState(false);

  useEffect(() => {
    if (provider) {
      provider.getBalance(props.account).then((value) => {
        setEthBalance(utils.formatEther(value));
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [provider])

  return (
    <div className="App-table">
      <table width="500">
        <caption>Account: <b>{props.account}</b></caption>
        <thead>
        <tr>
          <th>Item</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            ETH Balance &nbsp;
            { txModal ? (
              <button onClick={() => setTxModal(false)}>
                Cancel
              </button> )
              : (
              <button onClick={() => setTxModal(true)}>
                Transfer
              </button> )
            }
          </td>
          <td>{ethBalance}</td>
        </tr>
        { txModal && (
        <tr>
          <td colSpan="2">
            <TransferETH />
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}


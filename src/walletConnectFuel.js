import React, { useState, useEffect } from 'react';
import { Fuel, FuelWalletConnector } from '@fuel-wallet/sdk';

const WalletConnectFuel = ({ onConnected, onDisconnected }) => {
  const [fuel, setFuel] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {

  }, []);

  const connectWallet = async () => {
    try {
      const fuelInstance = new Fuel({
        connectors: [new FuelWalletConnector()],
      });

      const connectors = await fuelInstance.connectors();
      console.log("Available connectors:", connectors);

      const connectionState = await fuelInstance.connect();
      console.log("Connection state:", connectionState);

      if (connectionState) {
        const accounts = await fuelInstance.accounts();
        console.log("Accounts:", accounts);
        setWalletAddress(accounts[0]);
        setFuel(fuelInstance);
        onConnected && onConnected(accounts[0]);
      } else {
        throw new Error('Wallet connection failed');
      }
    } catch (error) {
      console.error("Connection error:", error);
      onDisconnected && onDisconnected();
    }
  };

  const disconnectWallet = () => {
    setFuel(null);
    setWalletAddress(null);
    onDisconnected && onDisconnected();
  };

  return (
    <div>
      {walletAddress ? (
        <button onClick={disconnectWallet}>Disconnect Wallet</button>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnectFuel;

# Wallet-Connect-Fuel

A simple, lightweight library designed to help integrate Fuel wallet connections into React applications seamlessly. This library utilizes the @fuel-wallet/sdk to establish and manage wallet connections within your dApp.

## Installation

```bash
npm install wallet-connect-fuel

```

## Usage

```jsx
import React from 'react';
import { useWalletConnect } from 'wallet-connect-fuel';

const App = () => {
  const { connectWallet, disconnectWallet, walletAddress } = useWalletConnect();

  return (
    <div>
      {walletAddress ? (
        <button onClick={disconnectWallet}>Disconnect Wallet</button>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      {walletAddress && <p>Connected Wallet Address: {walletAddress}</p>}
    </div>
  );
};

export default App;
```

## Configuration

You can configure the library by passing additional options to the connectWallet function to cater to specific needs, such as specifying a network.

## Features

    Connect and disconnect wallet functionality.
    Easy integration with React applications.
    Supports Fuel SDK latest features.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or additional features.

## License

This project is licensed under the ISC License - see the LICENSE.md file for details.
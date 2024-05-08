import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, trustWallet, walletConnect, phantomWallet } from "@thirdweb-dev/react";
import { Ethereum } from "@thirdweb-dev/chains"
import { Toaster } from "react-hot-toast";

import "./main.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
      activeChain={ Ethereum }
      supportedWallets={[
        phantomWallet(),
        coinbaseWallet(),
        walletConnect(),
        metamaskWallet(),
        trustWallet(),
      ]}
    >
      <App />
      <Toaster />
    </ThirdwebProvider>
  </React.StrictMode>
);

"use client";

import {
  useWalletClient,
  useChainWallet,
  useChains,
  useChain,
} from "@cosmos-kit/react";
import Link from "next/link";
import { chains, assets } from "chain-registry";

const chainsList = ["localchain-1"];

export default function Home() {
  const walletClient = useWalletClient("keplr-extension");

  const connectWallet = () => {
    walletClient?.client?.enable?.(chainsList);
    // walletClient?.client?.connect?.(chainsList)
    console.log(chains);
    console.log(assets)
  };

  const {
    isWalletConnected,
    address,
    connect,
    disconnect,
    logoUrl,
    username,
    signAndBroadcast,
    chain,
    openView,
  } = useChain("localchain-1");

  return (
    <div>
      {JSON.stringify(chain)}
      <div className="flex items-center justify-between">
        <div className="font-semibold">Networks List</div>
        <div>
          <button onClick={connectWallet} className="connect-btn">
            Connect Wallet
          </button>
        </div>
      </div>
      {address}
      {chainsList.map((chain) => (
        <li className="font-bold underline">
          <Link href={"/chain/" + chain}>{chain}</Link>
        </li>
      ))}
    </div>
  );
}

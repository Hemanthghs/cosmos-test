"use client";

import { ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { wallets as keplr } from "@cosmos-kit/keplr";
import { wallets as leap } from "@cosmos-kit/leap";
import { Chain, AssetList } from '@chain-registry/types';

import React from "react";

const localchain: Chain = {
  chain_name: "localchain-1",
  status: "live",
  network_type: "testnet",
  pretty_name: "eventchain",
  chain_id: "localchain-1",
  bech32_prefix: "event",
  slip44: 118,
  staking: {
    staking_tokens: [
      {
        denom: 'uevent',
        
      }
    ]

  }
};

const localassets: AssetList = {
  chain_name: "localchain-1",
  assets: [
    {
      denom_units: [
        {
          denom: "uevent",
          exponent: 6,
        },
      ],
      base: "uevent",
      symbol: "EVENT",
      display: "EVENT",
      name: "EVENT",
    },
  ],
};

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChainProvider
      chains={[localchain]} // supported chains
      assetLists={[localassets]} // supported asset lists
      wallets={[...keplr, ...leap]} // supported wallets
      // walletConnectOptions={{
      //   signClient: { projectId: "e5b5432946077645605cad90969ed1a0" },
      // }}
      endpointOptions={{
        endpoints: {
          "localchain-1": {
            rpc: ["http://localhost:26657"],
          },
        },
      }}
    >
      <div className="my-10 mx-24">{children}</div>
    </ChainProvider>
  );
};

export default Home;

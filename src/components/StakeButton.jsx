import { useContract, Web3Button } from "@thirdweb-dev/react";

import { ethers } from 'ethers';
import { useEffect } from "react";

import toast from 'react-hot-toast'

export default function StakeButton({stakeQuantity, setStakeQuantity, tokenBalance}, ...props){

  const { contract: dragonTokenContract, isLoading: loadingDragonTokenContract } = useContract(import.meta.env.VITE_TOKEN_ADDRESS, "token");

  function resetValue() {
    setStakeQuantity("0");
  };

  // const loadingMessage = toast.loading("Staking your tokens... [2 Transactions]⏳")

  return (
    <Web3Button
      contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
      action={async (contract) => {
        await dragonTokenContract?.erc20.setAllowance(
          import.meta.env.VITE_STAKING_CONTRACT_ADDRESS,
          stakeQuantity
        );
  
        await contract.call("stake", [
          ethers.utils.parseUnits(stakeQuantity, 9).toString(), 
        ]);
        resetValue();
      }}
      onSuccess={() => 
        toast.success("Stake Successful!✅")
      }
      onError={() => {
        toast.error("Oopsies! Something went wrong⚠️ Please ensure that you are using the correct wallet and on ETH Chain.")
      }}
      className="connect-btn"
      isDisabled={tokenBalance?.displayValue < 101 || !tokenBalance }
    >
      Stake
    </Web3Button>
  )
}


import { useContract, Web3Button } from "@thirdweb-dev/react";

import { ethers } from 'ethers';

import toast from 'react-hot-toast'

export default function UnstakeButton({isStakeHolder, unstakeQuantity, setUnstakeQuantity}, ...props) {


  function resetValue() {
    setUnstakeQuantity("0");
  };

  // const loadingMessage = toast.loading("Unstaking your tokens...⏳")

  return (
    <Web3Button
      contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
      action={async (contract) => {
        await contract.call("unstake", [
          ethers.utils.parseUnits(unstakeQuantity, 9)
        ])
        
      }}
      
      onSuccess={() => 
        toast.success("Unstake Successful! ✅")
      }
      onError={() => {
        toast.error("Oopsies! Something went wrong⚠️ Please ensure that you are using the correct wallet, on ETH Chain, and double check the amount.")
      }}
      isDisabled={!isStakeHolder}
      className="connect-btn"
    >
      Unstake
    </Web3Button>
                
  )
}


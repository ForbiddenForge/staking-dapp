import { Web3Button } from "@thirdweb-dev/react";


import toast from 'react-hot-toast'

export default function ClaimButton({userTotalStakedTokens, isStakeHolder, estimateRewards}, ...props){


  // const loadingMessage = toast.loading("Claiming rewards...⏳")

  return (
  <Web3Button
    contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
    action={async (contract) => {

      await contract.call("claimReward")
    }}
    onSuccess={() => 
      toast.success("Claim Reward Successful!✅")
    }
    onError={() => {
      toast.error("Oopsies! Something went wrong⚠️ You may have no rewards to claim. Please ensure that you are using the correct wallet and on ETH Chain.")
    }}

    isDisabled={false}
    className="connect-btn"
  >
    Claim Rewards
  </Web3Button>
                
  )
}


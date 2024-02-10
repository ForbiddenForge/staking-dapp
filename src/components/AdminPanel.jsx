import { Web3Button, useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
import toast from "react-hot-toast";
import { ethers } from 'ethers';


export default function AdminPanel() {

  const { contract } = useContract(import.meta.env.VITE_STAKING_CONTRACT_ADDRESS)
  const { mutateAsync: initialize, isLoading } = useContractWrite(contract, 'initialize')
  const { data: apy } = useContractRead(contract, "getAPY")
  const { data: unstakeFee } = useContractRead(contract, "getEarlyUnstakeFeePercentage") 


  /**
   * INITIAL STATES
   */
  const owner_ = '0x9412336D45b80896384494ac8C6E7ee4c486aea8'; // Owner wallet address
  const tokenAddress_ = '0xF503065771865a7a09dFE0757a73c7acadEB208a'; // Token to be staked address
  const apyRate_ = 100000; // 1000%
  const minimumStakingAmount_ = '100000000000';
  const maxStakeTokenLimit_ = '200000000000000000';
  const stakeStartDate_ = 1691924858; // unix timestamp
  const stakeEndDate_ = 1707887258; // unix timestamp
  const stakeDays_ = 30; // 30 days
  const earlyUnstakeFeePercentage_ = 1200; // 12%

  /**
   * UPDATES
   */

  const updateMinimumStakingAmount = '100000000000'; // 100 tokens
  const updateMaximumStakingAmount = '200000000000000000'; // 200M
  const updateApy = 50000; // 500%
  const updateStakeDays = 15; // 15 days

  const initializeStakingContract = async () => {
    try {
      await initialize({
        args: [owner_,
              tokenAddress_,
              apyRate_,
              minimumStakingAmount_,
              maxStakeTokenLimit_,
              stakeStartDate_,
              stakeEndDate_,
              stakeDays_,
              earlyUnstakeFeePercentage_      
        ]
      });
      console.info("contract call success");
      toast.success("contract was initialized!")
    } catch (err) {
      console.error("contract call failure", err);
      toast.error("contract failed to initialize")
    }

  }


  return (
    <div className='card m-5 hidden'>
      <h1> ADMIN PANEL </h1>
      <div className='grid'>
      <Web3Button
        contractAddress={ import.meta.env.VITE_STAKING_CONTRACT_ADDRESS }
        action={initializeStakingContract}
      >
        Initialize Contract
      </Web3Button> 
      <Web3Button
        contractAddress={ import.meta.env.VITE_STAKING_CONTRACT_ADDRESS }
        action={async (contract) => {
          await contract.call("updateMinimumStakingAmount", [{updateMinimumStakingAmount}])
      }}
      >
      Update Minimum Staking Amount (Default 100)
      </Web3Button>

      <br />
      <br />

      <Web3Button
        contractAddress={ import.meta.env.VITE_STAKING_CONTRACT_ADDRESS }
        action={async (contract) => {
          await contract.call("updateMaximumStakingAmount", [{updateMaximumStakingAmount}])
        }}
      >
        Update Maximum Staking Amount (Default 200M)
      </Web3Button>

      <br />
      <br />

      <div className='grid'>
      <Web3Button
        contractAddress={ import.meta.env.VITE_STAKING_CONTRACT_ADDRESS }
        action={async (contract) => {
          await contract.call("updateApy", [updateApy])
        }}
      >
        Update Apy
      </Web3Button>

      <Web3Button
        contractAddress={ import.meta.env.VITE_STAKING_CONTRACT_ADDRESS }
        action={async (contract) => {
          await contract.call("updateStakeDays", [updateStakeDays])
        }}
      >
        Update Staking (Lock) days
      </Web3Button>

      </div>

      </div>
      

    </div>
      
  )
}
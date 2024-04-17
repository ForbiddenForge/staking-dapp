import { Web3Button, useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
import toast from "react-hot-toast";
import { ethers } from 'ethers';


export default function AdminPanel() {

  const { contract: stakingContract, isLoading: loadingStakingContract } = useContract(import.meta.env.VITE_STAKING_CONTRACT_ADDRESS, "custom");
  const { mutateAsync: initialize, isLoading } = useContractWrite(stakingContract, 'initialize')
  const { data: apy } = useContractRead(stakingContract, "getAPY")
  const { data: unstakeFee } = useContractRead(stakingContract, "getEarlyUnstakeFeePercentage") 
  const { data: getStakeEndDate } = useContractRead(stakingContract, "getStakeEndDate")


  /**
   * INITIAL STATES
   */
  const owner_ = '0x9412336D45b80896384494ac8C6E7ee4c486aea8'; // Owner wallet address
  const tokenAddress_ = '0x2E5BC438539d0f68667570946a8Fe0e938Bc2261'; // Token to be staked address
  const apyRate_ = 100000; // 1000%
  const minimumStakingAmount_ = '100000000000';
  const maxStakeTokenLimit_ = '200000000000000000';
  const stakeStartDate_ = 1691924858; // unix timestamp
  const stakeEndDate_ = 1739675571; // unix timestamp for 2/15/2025
  const stakeDays_ = 30; // 30 days
  const earlyUnstakeFeePercentage_ = 1200; // 12%

  /**
   * UPDATES
   */

  const updateMinimumStakingAmount = '100000000000'; // 100 tokens
  const updateMaximumStakingAmount = '200000000000000000'; // 200M
  const updateApy = 12500; // 125%
  const updateStakeDays = 30; // 15 days
  const updateStakeEndDate = 1739675571;

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
    <div className='grid'>
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

      <Web3Button
        contractAddress={ import.meta.env.VITE_STAKING_CONTRACT_ADDRESS }
        action={async (contract) => {
          await contract.call("updateStakingEndDate", [updateStakeEndDate])
        }}
      >
        Update Staking End Date
      </Web3Button>
      <h3 className=" bg-white text-xl sm:text-xl font-medium text-gray-800 dark:text-gray-200">
        <p>Stake End Date</p>
        {`${getStakeEndDate ? 
          new Date(getStakeEndDate * 1000).toLocaleDateString()
          : "not staked"}`}
        <br />
        {`${getStakeEndDate ? 
          getStakeEndDate : 0}`}
      </h3>
      

      </div>

      </div>
      

    </div>
      
  )
}
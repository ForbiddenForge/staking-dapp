import {
  ConnectWallet, 
  Web3Button,
  useContract, 
  useContractRead, 
  useContractWrite, 
  useTokenBalance, 
  useAddress} from '@thirdweb-dev/react';
import { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers';
import toast from "react-hot-toast";

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import StakePanel from './components/StakePanel.jsx';
import ClaimPanel from './components/ClaimPanel.jsx';
import UnstakePanel from './components/UnstakePanel.jsx';



import CountdownTimer from './components/CountdownTimer';


import './main.css'
import StatisticsPanel from './components/StatisticsPanel.jsx';



export default function Home() {

  
  // User Info (Connected Wallet)
  const address = useAddress();
  const { contract: dragonTokenContract, isLoading: loadingDragonTokenContract } = useContract(import.meta.env.VITE_TOKEN_ADDRESS, "token");
  const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(dragonTokenContract, address);
  
  // Staking Contract
  const { contract: stakingContract, isLoading: loadingStakingContract } = useContract(import.meta.env.VITE_STAKING_CONTRACT_ADDRESS, "custom");
  const { data: stakingContractBalance, isLoading: loadingStakingContractBalance } = useTokenBalance(dragonTokenContract, import.meta.env.VITE_STAKING_CONTRACT_ADDRESS);


  // Contract Read Functions
  const { data: apy } = useContractRead(stakingContract, 'getAPY');
  const { data: unstakeFee } = useContractRead(stakingContract, 'getEarlyUnstakeFeePercentage'); 
  const { data: stakeDays, isLoading: loadingStakeDays } = useContractRead(stakingContract, 'getStakeDays');
  const { data: stakingStatus, isLoading: loadingStakingStatus } = useContractRead(stakingContract, 'getStakingStatus');
  const { data: userTotalStakedTokens } = useContractRead(stakingContract, 'getTotalStakedTokens');
  const { data: totalUsers } = useContractRead(stakingContract, 'getTotalUsers');
  const { data: userData, isLoading: loadingUserData } = useContractRead(stakingContract, 'getUser', [address]);
  const { data: userEstimatedRewards, isLoading: loadingUserEstimatedRewards } = useContractRead(stakingContract, 'getUserEstimatedRewards');
  const { data: withDrawableAmount } = useContractRead(stakingContract, "getWithdrawableAmount")
  const { data: isStakeHolder } = useContractRead(stakingContract, 'isStakeHolder', [address]);
  const { data: owner } = useContractRead(stakingContract, 'owner');


  
  
  const [stakeQuantity, setStakeQuantity] = useState("0");
  const [unstakeQuantity, setUnstakeQuantity] = useState("0");
  
  const [userTokenBalance, setUserTokenBalance] = useState("0");
  const [lockedTokenStatus, setLockedTokenStatus] = useState(false);

  
  const lockExpiration = stakeDays?.toNumber() + userData?.lastStakeTime.toNumber()

  
  useEffect(() => {
    if (isStakeHolder) {
      if ((Date.now() / 1000) - lockExpiration < 0) {
        setLockedTokenStatus(true);
      }
      if ((Date.now() / 1000) - lockExpiration >= 0) {
        setLockedTokenStatus(false)
      }
    
    }
  }, [lockedTokenStatus, setLockedTokenStatus, isStakeHolder]);  
    
  
  useEffect(() => {
    setUserTokenBalance(tokenBalance?.displayValue);
  }, [tokenBalance, loadingTokenBalance, userTokenBalance, setUserTokenBalance]);
  
  useEffect(() => {
    if (userData){

      console.log('user estimated rewards', userData?.rewardAmount)
    }
  })



  const estimateRewards = useMemo(() => {
    if (userData) {
      const currentTime = Math.round(Date.now() / 1000);
      const totalStakedTime = currentTime - userData?.lastRewardCalculationTime.toNumber();

      const estimateRewards = Math.round((((totalStakedTime * userData?.stakeAmount * apy) / (365 * 86400)) / 10000) + userData?.rewardAmount.toNumber());
      
      return estimateRewards

    } else {

      return 0
    }
  }, [userEstimatedRewards, stakeQuantity, setStakeQuantity, unstakeQuantity, setUnstakeQuantity, userData]);

  const showPanel = () => {
    if (tokenBalance && tokenBalance > 0) {
      return true
    }
    if (userTotalStakedTokens && userTotalStakedTokens > 0) {
      return true
    }
    if (userEstimatedRewards > 0) {
      return true
    }
    if (userData !== undefined) {
      return true
    }
    else {
      return false
    }
  }


  return (
    <div className="bg-[#1c080d] min-h-screen flex flex-col">
      <Header />
      <h1 className="text-xl flex justify-center">
        Welcome to{" "} 
        <span className="gradient-text-0">
          -DRGN3D-
        </span>
        {" "}Staking.
      </h1>
      <div className='flex justify-center items-center'>
        {address === owner && <AdminPanel />}
      </div>

      
      <StatisticsPanel 
      address={address}
      dragonTokenContract={dragonTokenContract}
      loadingDragonTokenContract={loadingDragonTokenContract}
      tokenBalance={tokenBalance}
      stakingContract={stakingContract}
      loadingStakingContract={loadingStakingContract}
      stakingContractBalance={stakingContractBalance}
      apy={apy}
      stakeDays={stakeDays}
      loadingStakeDays={loadingStakeDays}
      userTotalStakedTokens={userTotalStakedTokens}
      totalUsers={totalUsers}
      userData={userData}
      withDrawableAmount={withDrawableAmount}
      userTokenBalance={userTokenBalance}
      unstakeFee={unstakeFee}
      />

      {/* {!loadingUserData && !loadingStakingContract && (  */}
      <div className="flex-col justify-center items-center">
        <div id='left column'>
          <h1 className="text-xl flex justify-center mb-5">
          Stake Your{" "} 
          <span className="gradient-text-0">
            -$DRGN3D-
          </span>
          {" "}Tokens!
          </h1>

          <StakePanel
            tokenBalance={tokenBalance}
            stakeQuantity={stakeQuantity}
            setStakeQuantity={setStakeQuantity}
          />

            
            <ClaimPanel 
              userData={userData}
              estimateRewards={estimateRewards}
              userTotalStakedTokens={userTotalStakedTokens}
              isStakeHolder={isStakeHolder}
            />
  
            <UnstakePanel 
              userData={userData}
              unstakeQuantity={unstakeQuantity}
              setUnstakeQuantity={setUnstakeQuantity}
              isStakeHolder={isStakeHolder}
              lockedTokenStatus={lockedTokenStatus}
            />





          <div className='ml-20 mr-20 mt-10 mb-40'>
          {!loadingStakeDays && !loadingStakingContract && isStakeHolder && <CountdownTimer />}
          </div>
        </div>
      </div>
      {/* )} */}
            
      <div className='flex justify-center items-center mt-10'>
        <Footer />
      </div>
      
    </div>

  );
}

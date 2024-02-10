import { ethers } from "ethers";


export default function StatisticsPanel({ address, dragonTokenContract, loadingDragonTokenContract, tokenBalance, stakingContract, loadingStakingContract, stakingContractBalance, apy, stakeDays, loadingStakeDays, userTotalStakedTokens, totalUsers, userData, withDrawableAmount, userTokenBalance, unstakeFee }, ...props) {


  return (
      // {/* <!-- Card Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Wallet {" $"}{tokenBalance ? tokenBalance?.symbol : "loading"} Balance
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  {" $"}{tokenBalance?.symbol} in your wallet (unstaked)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {userTokenBalance ? 
                ethers.utils.commify(userTokenBalance).split('.')[0] 
                : 0.00}
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Staked {" $"}{tokenBalance?.symbol} Balance
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  {" $"}{tokenBalance?.symbol} you have staked.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
              {userTotalStakedTokens ? 
              ethers.utils.commify(
                  ethers.utils.formatUnits(userTotalStakedTokens?.toString(), 9)
                  ).split('.')[0] 
                : 0.00}
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total Claimed Rewards
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Grand Total {" $"}{tokenBalance?.symbol} rewards you have claimed.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
              {userData ? 
                ethers.utils.commify(
                    ethers.utils.formatUnits(userData?.rewardsClaimedSoFar, 9)
                  ).split('.')[0]
                : 0.00
              }
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Staking Lock Period
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Lock period in which tokens are subject to an early withdrawal fee. Timer restarts EVERY TIME a user stakes.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {`${stakeDays ? stakeDays / 86400 : "not staked"} days`} 
                {/* remove or add / 86400 depending on output */}
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

       



        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Current APY
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Current APY% of the rewards you will receive.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {apy ? apy / 10000 * 100 : "contract not loaded"}%
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Early Unstake Fee
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                    Fee that is applied if the user unstakes before the lock period end. Fee amount remains in the staking contract.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {unstakeFee ? unstakeFee / 10000 * 100 : "contract not loaded"}%
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Last User Stake Date
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                    The timestamp in which you last staked into the contract. Used for calculating/updating your lock period.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {`${userData ? 
                  new Date(userData?.lastStakeTime * 1000).toLocaleDateString() : "not staked"}`}
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total Stakers
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                    Number of holders currently staked. 
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {`${totalUsers}`}
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total Staked Tokens
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                    Number of tokens currently staked by all users (does not include original contract principal). 
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex justify-center items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {`${stakingContractBalance && withDrawableAmount ? ethers.utils.commify(Number(ethers.utils.formatUnits((stakingContractBalance?.value), 9)) - Number(ethers.utils.formatUnits((withDrawableAmount), 9))).split('.')[0] : 0.00}`}
              </h3>
              
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}


        
      </div>
      {/* <!-- End Grid --> */}
      
    </div>
    // {/* <!-- End Card Section --> */}
  )
}
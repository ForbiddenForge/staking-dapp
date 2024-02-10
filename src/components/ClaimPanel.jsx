import ClaimButton from "./ClaimButton";
import { ethers } from "ethers";

export default function StakePanel({userData, estimateRewards, userTotalStakedTokens, isStakeHolder}) {

  return (
    <div>
      <div id='second group' className='flex justify-center items-center gap-2 my-10 ml-5 mr-5'>         
        <div className='flex justify-center items-center mb-0'>
          <h1 className='text-xl animate-pulse'>{`Claimable Rewards: ${userData ? ethers.utils.commify(ethers.utils.formatUnits(estimateRewards, 9)).split('.')[0] : "0"}.00`}</h1>            
        </div>
          {/* <!-- End Input Number --> */}
        <ClaimButton 
          userTotalStakedTokens={userTotalStakedTokens}
          isStakeHolder={isStakeHolder} 
          estimateRewards={estimateRewards}
        />
      </div>

    </div>
  )
}
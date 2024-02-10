import StakeButton from "./StakeButton";
import { ethers } from "ethers";

export default function StakePanel({tokenBalance, stakeQuantity, setStakeQuantity}) {

  return (
    <div>
      <div className='flex justify-center items-center mb-0 ml-80'>
        <button onClick={() => { tokenBalance ?
            setStakeQuantity((tokenBalance?.displayValue).split('.')[0])
            : 0
          }} 
          type="button" 
          className="px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          MAX
        </button>              
      </div>

      <div id='first group' className='flex justify-center items-center gap-2 ml-5 mr-5 mb-20'>
        {/* <!-- Input Number --> */}
        <div className="bg-white border border-gray-200 rounded-lg dark:bg-slate-700 dark:border-gray-700" >
          <div className="w-full flex justify-between items-center gap-x-1">
            <div className="grow py-2 px-3">
              <input 
                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" 
                type="number" 
                value={stakeQuantity}
                min={1}
                max={tokenBalance?.displayValue}
                onChange={(e) => setStakeQuantity(e.target.value)}
              />
            </div>
            <div className="flex items-center -gap-y-px divide-x divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
              <button 
                type="button" 
                className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                onClick={() => { 
                  setStakeQuantity((Number(stakeQuantity) - 1).toString())
                }}
              >
                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
              </button>
              <button 
                type="button" 
                className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" 
                onClick={() => {
                  setStakeQuantity((Number(stakeQuantity) + 1).toString())
                }}
                >
                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- End Input Number --> */}
        <StakeButton 
          stakeQuantity={stakeQuantity}
          setStakeQuantity={setStakeQuantity}
          tokenBalance={tokenBalance}
        />
      </div>

    </div>

  )
}
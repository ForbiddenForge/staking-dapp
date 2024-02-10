
import React from "react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Countdown from "react-countdown";


export default function CountdownTimer() {
  const address = useAddress()
	const { contract: stakingContract, isLoading: loadingStakingContract } = useContract(import.meta.env.VITE_STAKING_CONTRACT_ADDRESS, "custom");

  const { data: userData, isLoading: loadingUserData } = useContractRead(stakingContract, 'getUser', [address])
  const { data: stakeDays, isLoading: loadingStakeDays } = useContractRead(stakingContract, 'getStakeDays')
  
  const lockExpiration = stakeDays?.toNumber() + userData?.lastStakeTime.toNumber()

	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			return (
				<div>
					<h2 className="text-white text-xl text-center animate-bounce">
						Your Tokens Are Unlocked!
					</h2>
					<div>
						<div className="flex space-x-2">
							<div className="flex-1">
								<div className="countdown animate-pulse">{days}</div>
								<div className="countdown-label">days</div>
							</div>
							<div className="flex-1">
								<div className="countdown animate-pulse">{hours}</div>
								<div className="countdown-label">hours</div>
							</div>
							<div className="flex-1">
								<div className="countdown animate-pulse">{minutes}</div>
								<div className="countdown-label">minutes</div>
							</div>
							<div className="flex-1">
								<div className="countdown animate-pulse">{seconds}</div>
								<div className="countdown-label">seconds</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h1 className="text-white text-sm mb-2 italic text-center"> Your Token Lock Time Remaining</h1>
					<div className="flex space-x-2">
						<div className="flex-1">
							<div className="countdown">{days}</div>
							<div className="countdown-label">days</div>
						</div>
						<div className="flex-1">
							<div className="countdown">{hours}</div>
							<div className="countdown-label">hours</div>
						</div>
						<div className="flex-1">
							<div className="countdown">{minutes}</div>
							<div className="countdown-label">minutes</div>
						</div>
						<div className="flex-1">
							<div className="countdown">{seconds}</div>
							<div className="countdown-label">seconds</div>
						</div>
					</div>
				</div>
			);
		}
	};

	return (
		<div>
			<Countdown date={new Date(lockExpiration * 1000)} renderer={renderer} />
		</div>
	);
}



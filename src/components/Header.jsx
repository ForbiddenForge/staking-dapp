import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import NavButton from "./NavButton";
import React from "react";
import { ConnectWallet, useAddress, useDisconnect, Web3Button, darkTheme } from "@thirdweb-dev/react";


export default function Header() {
	const address = useAddress();
	const disconnect = useDisconnect();
	const disabled = address;

	return (
		<header className="flex justify-center items-center p-3">
			<div className="flex justify-center items-center space-x-2 px-5">
        <a href="https://dragon3d.app" target="_blank">
				  <img className="rounded-full h-20 w-20" src="DragonLogo200.png" alt="" />
        </a>
			</div>

			<div className="flex items-center justify-center rounded-md">
				<div className="bg-[#2f0d16] p-4 space-x-2">
					<a
						className="hover:bg-[#7e233d] text-white py-2 px-4 rounded font-bold"
						href="https://dragon3d.app" target="_blank">
						Home
					</a>
					<ConnectWallet
            theme={darkTheme({
              colors: {
                accentText: "#ff2e6d",
                accentButtonBg: "#ff2e6d",
                modalBg: "#14151a",
                dropdownBg: "#14151a",
              },
            })}
            btnTitle={"Connect Wallet"}
            switchToActiveChain={false}
            modalSize={"wide"}
            welcomeScreen={{
              title:
                "DRGN3D: Your gateway to a decentralized world ",
            }}
            className="connect-btn"
          />
				</div>
			</div>

			
		</header>
	);
}

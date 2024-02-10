import React from "react";
const currentYear = new Date().getFullYear();
export default function Footer() {
	return (
		<footer className=" z-10 border-t border-[#78273d] bg-[#2f0d16] flex items-center  text-white justify-between px-5 py-2 fixed bottom-0 w-full/2">
			
			<a
				className="text-decoration-none text-white bg-red-600 text-lg py-2 px-6 rounded-full animate-bounce"
				href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x2E5BC438539d0f68667570946a8Fe0e938Bc2261"
        target="_blank"
        >
				BUY $DRGN3D
			</a>
			<p className="text-xs text-white pl-5">{currentYear} </p>
		</footer>
	);
}


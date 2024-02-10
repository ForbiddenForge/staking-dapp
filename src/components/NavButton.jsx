export default function NavButton({onClick, isActive, title}) {
	return (
		<button
			onClick={onClick}
			className={`${
				isActive && "bg-[#7e233d]"
			} hover:bg-[#7e233d] text-white py-2 px-4 rounded font-bold`}>
			{title}
		</button>
	);
}
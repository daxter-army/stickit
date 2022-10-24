interface SearchBarProps {
	inputString: string;
	styles?: {};
	placeholder: string;
	searchIcon: JSX.Element;
	inputClicker: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default SearchBarProps
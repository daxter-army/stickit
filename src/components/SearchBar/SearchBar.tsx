import React from 'react'

import SearchBarProps from './SearchBarProps';

import './SearchBar.css';

const SearchBar = ({ inputString, inputClicker, styles = {}, searchIcon, placeholder }: SearchBarProps): JSX.Element => {
	return (
		<div className='searchBar' style={styles}>
			{searchIcon}
			<input
				type={"text"}
				value={inputString}
				onChange={inputClicker}
				placeholder={placeholder}
				className='searchBar__searchField'
			/>
		</div>
	)
}

export default SearchBar
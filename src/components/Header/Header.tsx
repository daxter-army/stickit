import React, { useState } from 'react'

import { BiSearchAlt } from "react-icons/bi";

import SearchBar from '../SearchBar/SearchBar';
import HeaderProps from './HeaderProps';

import './Header.css';

const Header = ({ heading }: HeaderProps): JSX.Element => {
	const [headerQuery, setHeaderQuery] = useState<string>("test input");

	const headerQueryHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setHeaderQuery(event.target.value)
	}


	return (
		<header className="header">
			<h1 className="header__heading">{heading}</h1>
			<SearchBar
				styles={{ marginTop: 10 }}
				inputString={headerQuery}
				placeholder="Search your notes here"
				inputClicker={headerQueryHandler}
				searchIcon={<BiSearchAlt size={22} className='searchBar__searchIcon' />}
			/>
		</header>
	)
}

export default Header
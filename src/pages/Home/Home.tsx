import React from 'react'

import Header from '../../components/Header/Header'
import LandingNote from '../../components/Notes/LandingNote/LandingNote'

import './Home.css'

const Home = () => {
	return (
		<div className='home'>
			<Header heading={"So, what are you looking for?"} />
			{/* <NotesContainer></NotesContainer> */}
			<LandingNote />
		</div>
	)
}

export default Home
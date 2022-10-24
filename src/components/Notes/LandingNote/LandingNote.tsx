import React from 'react'

// import LandingNoteProps from './LandingNote';

import ELECTRON_EVENTS from '../../../constants/eventConstants';

import './LandingNote.css';

const { ipcRenderer } = window.require('electron');


const LandingNote = (): JSX.Element => {
	const newNoteHandler = () => {
		ipcRenderer.send(ELECTRON_EVENTS.CREATE_NOTE);
	}

	return (
		<div className='landingNote' onClick={newNoteHandler}>
			<h3 className='landingNote__noteHeading'>Write that aim</h3>
			<p>Make a new note by clicking here</p>
		</div>
	)
}

export default LandingNote
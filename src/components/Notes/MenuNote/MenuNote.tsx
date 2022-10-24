import React from 'react'

import MenuNoteProps from './MenuNoteProps';

const MenuNotes = ({ title }: MenuNoteProps): JSX.Element => {
	return (
		<div>{title}</div>
	)
}

export default MenuNotes
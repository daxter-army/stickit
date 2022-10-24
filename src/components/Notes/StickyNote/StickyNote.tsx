import React, { useState, useRef, useEffect } from 'react';

import StickyNoteProps from './StickyNoteProps';

import { getNoteBgColor } from '../../../utils/utils';

import './StickyNote.css';


const StickyNote = ({ titlePlaceholder = "", bodyPlaceholder = "" }: StickyNoteProps): JSX.Element => {
	const noteRef = useRef<HTMLDivElement>(null);
	const headRef = useRef<HTMLTextAreaElement>(null);
	const textRef = useRef<HTMLTextAreaElement>(null);

	const [titleInput, setTitleInput] = useState<string>("");
	const [bodyInput, setBodyInput] = useState<string>("");

	const titleInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textInput = event.currentTarget.value

		// Null assertion to suppress ts-error
		headRef.current!.style.height = "0px";
		headRef.current!.style.height = `${headRef.current!.scrollHeight + 4}px`;

		setTitleInput(textInput.replace(/\n/g, ""))
	}

	const bodyInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const bodyTextInput = event.target.value

		// To avoid "Enter" when coming from Title
		if (bodyInput.length === 0) {
			setBodyInput(bodyTextInput.replace(/\n/g, ""))
			return
		}

		setBodyInput(bodyTextInput)
	}

	const headRefKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		// Transfer control to the note body
		if (event.key === "Enter") {
			textRef.current!.focus()
		}
	}

	const bodyRefKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		// Transfer control to the note title
		if (bodyInput.length === 0 && event.key === "Backspace") {
			headRef.current!.focus()
		}
	}

	useEffect(() => {
		if (!headRef.current) return

		headRef.current.style.height = "0px";
		headRef.current.style.height = `${headRef.current.scrollHeight + 7}px`;
	}, [headRef])

	useEffect(() => {
		if (!noteRef.current) return

		noteRef.current.style.backgroundColor = getNoteBgColor()
	}, [noteRef])

	return (
		<div className='stickyNote' ref={noteRef}>
			{/* NOTE TITLE */}
			<textarea
				ref={headRef}
				value={titleInput}
				onKeyDown={headRefKeyDown}
				onChange={titleInputHandler}
				className='stickyNote__title'
				placeholder={titlePlaceholder}
			></textarea>
			{/* NOTE BODY */}
			<textarea
				ref={textRef}
				value={bodyInput}
				onKeyDown={bodyRefKeyDown}
				onChange={bodyInputHandler}
				className='stickyNote__body'
				placeholder={titleInput.length ? "" : bodyPlaceholder}
			></textarea>
		</div>
	)
}

export default StickyNote
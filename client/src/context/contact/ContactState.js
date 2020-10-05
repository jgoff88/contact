import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Jim Smith',
				email: 'jim@yahoo.com',
				phone: '111-111-1111',
				type: 'personal'
			},
			{
				id: 2,
				name: 'John Smith',
				email: 'john@yahoo.com',
				phone: '222-222-2222',
				type: 'personal'
			},
			{
				id: 3,
				name: 'Ted Smith',
				email: 'ted@yahoo.com',
				phone: '333-333-3333',
				type: 'personal'
			}
		],
		current: null
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispatch({
			type: ADD_CONTACT,
			payload: contact
		});
	};

	// Delete Contact
	const deleteContact = (id) => {
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		});
	};

	// Set Current Contact
	const setCurrent = (contact) => {
		dispatch({
			type: SET_CURRENT,
			payload: contact
		});
	};

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT
		});
	};

	// Update Contact

	// Filter Contacts

	//Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;

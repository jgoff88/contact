import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactsContext from '../../context/contact/contactContext';

const Contacts = () => {
	const contactContext = useContext(ContactsContext);

	const { contacts } = contactContext;

	return <Fragment>{contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}</Fragment>;
};

export default Contacts;

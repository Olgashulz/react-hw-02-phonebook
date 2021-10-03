import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => (
    <ul className="contactsList">
        {contacts.map(({ name, number, id }) => (
            <li key={id}>
                {name}:
                <span>{number}</span>
                <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

Contacts.proTotypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts;

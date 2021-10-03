import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';


const Contacts = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contactsList}>
        {contacts.map(({ name, number, id }) => (
            <li key={id}
                className={styles.contactItem}>
                {name}:
                <span className={styles.contactTel}>{number}</span>
                <button onClick={() => onDeleteContact(id)} className={styles.button}>Delete</button>
            </li>
        ))}
    </ul>
);

Contacts.proTotypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts;

import React, { Component } from "react";
import shortid from 'shortid';

import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from "./components/Filter";
import styles from './App.module.css';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  addNewContact = data => {
    // console.log(this.state.contacts)
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
    console.log(this.state)
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  getFilterName = event => {
    this.setState({
      filter: event.currentTarget.value
    });
    // console.log(this.state.filter)
  }

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };



  render() {
    const { filter, contacts } = this.state;
    const peapleInContact = this.visibleContacts();

    return (
      <>
        <div className={styles.container}>
          <div className={styles.phonebook}>
            <h1 className={styles.title}>Phonebook</h1>
            <Form contacts={contacts} addNewContact={this.addNewContact} />
            <h2 className={styles.titleContacts}>Contacts</h2>
            <Filter value={filter} onChange={this.getFilterName} />
            <Contacts contacts={peapleInContact} onDeleteContact={this.deleteContact} />
          </div>
        </div>
      </>
    )
  }
}

export default App;
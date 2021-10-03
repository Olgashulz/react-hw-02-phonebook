import React, { Component } from "react";
import shortid from 'shortid';

import Form from './components/Form';
import Contacts from './components/Contacts'

class App extends Component {
  state = {
    contacts: []
  }

  addNewContact = data => {
    console.log(this.state.contacts)

    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number
    }

    console.log(contact)
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

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} onDeleteContact={this.deleteContact} />
      </>
    )
  }
}

export default App;
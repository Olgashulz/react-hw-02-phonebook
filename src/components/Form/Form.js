import React, { Component } from "react";
import PropTypes from 'prop-types';


class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    findNameInContact = (event) => {
        console.log(event.currentTarget.value)
        // console.log(this.props.contacts)

        if (this.props.contacts.find((contact) =>
            contact.name.toLowerCase() === event.currentTarget.value.toLowerCase()
        )) {
            return alert(`${event.currentTarget.value} is already in contacts.`)
        }
    }

    handleInputChange = (event) => {
        // console.log(event.currentTarget.value)
        // console.log(event.currentTarget.name)
        // console.log(this.props.contacts)

        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state);
        // console.log(event.currentTarget.name)
        this.props.addNewContact(this.state);
        this.resetForm();

    }

    resetForm = () => {
        this.setState({ name: '', number: '' });
    }





    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        onBlur={this.findNameInContact}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />

                </label>
                <button
                    type="submit"
                >Add contact</button>
            </form>

        )
    }
}

Form.propTypes = {
    contacts: PropTypes.array.isRequired,
    addNewContact: PropTypes.func.isRequired
}

export default Form;
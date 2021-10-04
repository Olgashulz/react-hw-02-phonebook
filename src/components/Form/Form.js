import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from './Form.module.css';


class Form extends Component {
    state = {
        name: '',
        number: '',
        disabled: false
    }

    findNameInContact = (event) => {
        // console.log(event.currentTarget.value)

        if (this.props.contacts.find((contact) =>
            contact.name.toLowerCase() === event.currentTarget.value.toLowerCase()
        )) {
            this.setState({ disabled: true })
            alert(`${event.currentTarget.value} is already in contacts.`)
        }
    }

    handleInputChange = (event) => {
        // console.log(event.currentTarget.value)
        // console.log(this.props.contacts)
        this.setState({ [event.currentTarget.name]: event.currentTarget.value, disabled: false })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewContact(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}
                className={styles.form} >
                <label className={styles.labelForm}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        onBlur={this.findNameInContact}
                        className={styles.inputForm}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={styles.labelForm}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        disabled={this.state.disabled}
                        className={styles.inputForm}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />

                </label>
                <button
                    type="submit"
                    disabled={this.state.disabled}
                    className={styles.formBtn}
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
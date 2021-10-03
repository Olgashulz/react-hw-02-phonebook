import React from "react";
import PropTypes from 'prop-types';
import styles from './Filter.module.css';


const Filter = ({ value, onChange }) => {
    return (
        <label className={styles.findLabel}>
            Find contact by name
            <input
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                className={styles.inputForm}
            />
        </label>
    )
}

Filter.protoTypes = {
    value: PropTypes.string.isRequired
}

export default Filter;

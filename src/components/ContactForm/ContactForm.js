import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

import { Component } from 'react';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handelSubmit = e => {
        const { name, number } = this.state;

        e.preventDefault();

        this.props.formSubmitHandler(name, number);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form className={s.form} onSubmit={this.handelSubmit}>
                <label htmlFor="">
                    <Typography variant="h6" gutterBottom>
                        Name
                    </Typography>
                    <TextField
                        label="Enter name"
                        variant="outlined"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">
                    <Typography variant="h6" gutterBottom>
                        Number
                    </Typography>
                    <TextField
                        label="Enter number"
                        variant="outlined"
                        type="text"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                    />
                </label>
                <div className={s.btnBox}>
                    <Button type="submit" variant="contained" color="primary">
                        Add contacts
                    </Button>
                </div>
            </form>
        );
    }
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
};

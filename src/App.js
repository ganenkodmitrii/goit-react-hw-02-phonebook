import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { Component } from 'react';
// import ContactList from './components/ContactList/ContactList';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        name: '',
        number: '',
        filter: '',
    };

    /*
     * Отвечает за обновление состояния
     */
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    // contacts ,
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.setState(prevState => ({
            contacts: prevState.contacts.concat({
                name: this.state.name,
                number: this.state.number,
                id: uuidv4(),
            }),
        }));
        this.reset();
        // Проп который передается форме для вызова при сабмите
        // this.props.onSubmit(this.state.name);
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.filter });
    };

    getVisibleContacts = () => {
        const normalizedFilter = this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const { name, number, filter } = this.state;

        const visibleContacts = this.getVisibleContacts();

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Phonebook</h2>
                <label htmlFor="">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">
                    number
                    <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit">Add contacts</button>

                <div>
                    <h2>Contacts</h2>

                    <label>
                        Find contacts by name
                        <input
                            type="text"
                            value={filter}
                            onChange={this.changeFilter}
                        />
                    </label>

                    {/* <ContactList contacts={visibleContacts} /> */}
                    <ul>
                        {this.state.contacts.map(({ id, name, number }) => (
                            <li key={id}>
                                <p>
                                    {name}: {number}
                                </p>
                                <button type="button">Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
        );
    }
}

export default App;

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Typography variant="h6" gutterBottom>
                        {name}: {number}
                    </Typography>

                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            onDeleteContact(id);
                        }}
                    >
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    );
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),
};

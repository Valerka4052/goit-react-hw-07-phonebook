import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux'; 
import { removeContact } from 'api';
import { useSelector } from 'react-redux';


export function ContactListItem({ name, number, id }) {
const dispatch = useDispatch()
 const isLoading = useSelector(state => state.contacts.isLoading)
    return (
        <Item >{name}: {number}
            <Button
                onClick={() => {
                    dispatch(removeContact(id))
                }}
                type='button'
                disabled={isLoading}>
                Delete
            </Button>
        </Item>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};


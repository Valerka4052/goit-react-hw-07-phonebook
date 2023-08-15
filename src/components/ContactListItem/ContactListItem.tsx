import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux'; 
import { removeContact } from '../../api';
import { AppDispatch } from '../../redux/store';
import { ContactResponseType } from '../../types';

export function ContactListItem({ name, phone, id }:ContactResponseType) {
    const dispatch: AppDispatch = useDispatch();
    return (
        <Item >{name}: {phone}
            <Button
                onClick={() => {
                    dispatch(removeContact(id))
                }}
                type='button'
            >
                Delete
            </Button>
        </Item>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};


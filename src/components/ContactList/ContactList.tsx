import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export function ContactList () {
    const contacts = useSelector((state: RootState) => state.contacts.items);
    const filter = useSelector((state: RootState) => state.filter);
    const normalizedFilter = filter.trim().toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
     return contacts.length > 0 ? <List>{filteredContacts.map(({ name, phone, id }) => <ContactListItem key={id} name={name} phone={phone} id={id} />)}</List> : null;
};

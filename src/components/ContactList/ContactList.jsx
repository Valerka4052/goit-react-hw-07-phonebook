import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';


export function ContactList () {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilter);
    });

    return (
        //  isLoading ? <Loader /> :
        contacts.length > 0 && <List>
            {filteredContacts.map(({ name, phone, id }) => {
                return <ContactListItem
                    key={id}
                    name={name}
                    number={phone}
                    id={id}
                />
            }
            )}
        </List>
    );
};

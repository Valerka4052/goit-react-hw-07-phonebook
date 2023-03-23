import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useEffect } from "react";
import { fetchContacts} from "api";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader'; 

        

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
const isLoading = useSelector(state => state.contacts.isLoading)
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textAlign: 'center',
        color: '#010101'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ><div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
        </div>
       
          <ContactList />
            { isLoading && <Loader />}
      </div>
    
    </div>
     
  );
};

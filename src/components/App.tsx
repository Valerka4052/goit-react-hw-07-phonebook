import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useEffect } from "react";
import { fetchContacts} from "../api";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader/Loader";
import { AppDispatch, RootState } from "../redux/store";

export function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const { error, isLoading } = useSelector((state: RootState) => state.contacts);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {error.message ? <h1>{error.message}</h1> :
          <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
          </div>}
        <ContactList />
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

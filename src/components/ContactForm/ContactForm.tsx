import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../api";
import { AppDispatch, RootState } from '../../redux/store';
import { ContactType } from '../../types';
import { FormikValues } from 'formik';


export function ContactForm() {
    const dispatch:AppDispatch = useDispatch();
    const contacts = useSelector((state: RootState) => state.contacts.items);

    const getValues = (inputValues:FormikValues):void => {
        if (inputValues.name === '' || inputValues.number === '') {
            return;
        } else if (contacts.find((contact) => {
            return contact.name === inputValues.name;
        })) {
            return alert(`${inputValues.name} is already in contacts`);
        } else {
            const contact:ContactType = {
                name: inputValues.name,
                phone: inputValues.number,
            };
            dispatch(addContact(contact));
            inputValues.name = '';
            inputValues.number = '';
            };
    };

        const values = {
            name: '',
            number: '',
        };
        
        const phoneSchema = Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(5)
            .required('A phone number is required');
        
        const validationSchema = Yup.object({
            name: Yup.string().required(),
            number: phoneSchema,
        });

    const submitForm = (values: FormikValues):void => {
        getValues(values);
    };
        
    
        return (
            <Formik initialValues={values} onSubmit={submitForm} validationSchema={validationSchema}>
                <Form>
                    <Label>Name<Field name="name" /><ErrorMessage name="name" component="p" /></Label>
                    <Label>Number<Field name="number" /><ErrorMessage name="number" component="p" /></Label>
                    <Button type="submit">add contact</Button>
                </Form>
            </Formik>
        );
    };

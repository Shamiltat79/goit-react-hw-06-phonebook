import { Formik } from "formik";
import { Notify } from "notiflix";

import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";


import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { FormWrapper, StyledInput,  StyledErrorMessage  } from "./contactFormStyled";


const formSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
      })
      .required('Name is a required field'),
  
    number: Yup.string()
      .matches(/^\+?(\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, {
        message:
          'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +91 (123) 456-7890',
      })
      .required('Number is a required field'),
  });

  export const ContactForm = () => {
const contacts = useSelector(getContacts);
const dispatch = useDispatch();

const handleSubmit = (values, {resetForm}) => {
    const normalizedName = values.name.toLowerCase();
    const nameExist = contacts.find(({name}) => name.toLowerCase() === normalizedName);

    if(nameExist) {
        return Notify.info(`${values.name} is already in contacts!`);
    }
    dispatch(addContact(values));
    console.log(values);
    resetForm();
};
return (
    <Formik
    initialValues={{name: '', number: '',}}
    validationSchema = {formSchema}
    onSubmit = {handleSubmit} >
<FormWrapper>
<label>Name</label>
   <StyledInput         
      type="text"
      name="name"     
          />
        <StyledErrorMessage name="name" component="div" /> 
          <label>Number</label>
   <StyledInput         
      type="tel"
      name="number"     
          />
          <StyledErrorMessage name="name" component="div" /> 
            <button type='submit'>Add contact</button>

</FormWrapper>
    </Formik>
)

  };
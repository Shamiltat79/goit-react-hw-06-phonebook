import { useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/contactForm";
import { Container, Title } from "./AppStyled"; 
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";
import { getContacts } from "redux/selectors";

export const App = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <>
   <Container>
    <Title>PhoneBook</Title>
    <ContactForm />
    </Container>
    <Title>Contacts</Title>
    <ContactList />
    <ContactFilter />
    {/* <>
    {contacts.lenght > 0 ? 
      
      (
      <ContactList />)
       
      :( <p>"There are no contacts in your phone book. Please add a contact!"</p>)}</> */}
    
     
   </>
  );
};
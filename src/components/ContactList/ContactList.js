import { useSelector } from "react-redux";
import { ContactItem } from "./ContactItem/ContactItemStyled";
import { getContacts, getFilter } from "redux/selectors";
import { StyledContactList } from "./ContactListStyled";

export const ContactList = () => {
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
const getVisibleContacts = () => {
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedContact));
};
const visibleContacts = getVisibleContacts();

return(
<StyledContactList>
    {visibleContacts.map(contact => (<ContactItem key={contact.id} contact={contact} />))}
</StyledContactList>
)
}

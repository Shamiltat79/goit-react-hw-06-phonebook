import { useSelector } from "react-redux";
import { Contacts} from "components/ContactItem/ContactItem";
import { getContacts, getFilter } from "redux/selectors";
import { StyledContactList } from "./ContactListStyled";

const getVisibleContacts = (contactsArr, filterArr) => {
    const normalizedContact = filterArr.toLowerCase();
    return contactsArr.filter(({name}) => name.toLowerCase().includes(normalizedContact));
};

export const ContactList = () => {
const contacts = useSelector(getContacts);  
const filter = useSelector(getFilter);

const visibleContacts = getVisibleContacts(contacts, filter);

return(
<StyledContactList>
    {visibleContacts.map(({id, name, number}) => (<Contacts key={id} name={name} number={number}/>))}
</StyledContactList>
)
}

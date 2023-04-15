import { useSelector } from "react-redux";
import { Contacts} from "components/ContactItem/ContactItem";
import { getContacts, getFilter } from "redux/selectors";
import { StyledContactList } from "./ContactListStyled";



export const ContactList = () => {
const contacts = useSelector(getContacts);  
const filter = useSelector(getFilter);

const getVisibleContacts = () => {
    const normalizedContact = filter.toLowerCase();
    // console.log(contacts);
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedContact));
    
};

const visibleContacts = getVisibleContacts();

return(
<StyledContactList>
    {visibleContacts.map(({id, name, number}) => (<Contacts key={id} name={name} number={number}/>))}
</StyledContactList>
)
}

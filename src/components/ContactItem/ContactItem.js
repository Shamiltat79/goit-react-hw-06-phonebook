import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

import { ContactItem } from "./ContactItemStyled";

export const Contacts = ({ id, name, number }) => {
    const dispatch= useDispatch();
    const handleDelete = () => dispatch(deleteContact(id))

    return (
        <ContactItem>
            <p>{name} : {number}</p>
            
            <button onClick={handleDelete}>Delete</button>
        </ContactItem>
    )
}

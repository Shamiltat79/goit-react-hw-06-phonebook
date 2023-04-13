import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

import { ContactItem, DeleteButton } from "./ContactItemStyled";

export const Contacts = ({ id, name, number }) => {
    const dispatch= useDispatch();
    const handleDelete = () => dispatch(deleteContact(id))

    return (
        <ContactItem>
            <p>{name} : {number}  <DeleteButton onClick={handleDelete}>Delete</DeleteButton></p>
            
            
        </ContactItem>
    )
}

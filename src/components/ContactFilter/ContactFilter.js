import { useSelector, useDispatch } from "react-redux";
import { setFilterValue} from "redux/filterSlice";
import { getFilter } from "redux/selectors";
import { StyledInput, StyledLabel } from "./ContactFilterStyled";

export const ContactFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const handleFilter = evt => dispatch(setFilterValue(evt.target.value)); 
    return(
<StyledLabel>
    <StyledInput 
    type="text"
    name="filter"
    value={filter}
    minLength={2} 
    onChange={handleFilter} 
    />
</StyledLabel>
    );
}


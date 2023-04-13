import styled from "styled-components";
import { Form, Field, ErrorMessage} from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 500px; */
  text-align: center;
  /* margin: auto; */
  padding: 24px;
   
  
button {
 width: 120px;
 height: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  border-radius: 4px;
  border-color: #716f6f;
}
 
label {
    width: 100%;
text-align: left;
   margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;}

  `
export const StyledInput = styled(Field)`
  font-size: 20px;
  margin-bottom: 15px;
  border-radius: 6px;
  border-color: white;
  width: 100%;
  outline: none;
  :focus{
    outline: none;
  }

`
export const StyledErrorMessage = styled(ErrorMessage)`
color: black;
`;
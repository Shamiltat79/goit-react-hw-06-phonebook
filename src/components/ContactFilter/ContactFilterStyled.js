import styled from "styled-components";
import {  Field} from 'formik';

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
export const StyledLabel = styled.label`
width: 100%;
text-align: left;
   margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
`
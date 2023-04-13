import styled from "styled-components";


export const FilterContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  text-align: center;
  margin: auto;
  /* padding: 24px; */
background-color: orangered;
`

export const StyledInput = styled.input`
  font-size: 20px;
  margin-bottom: 15px;
  border-radius: 6px;
  /* border-color: red; */
  width: 400px;
  /* outline: red; */
  :focus{
    outline: none;
  }

`
export const StyledLabel = styled.label`
width: 100%;
text-align: center;
   margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
`

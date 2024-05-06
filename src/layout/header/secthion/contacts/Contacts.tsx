import React from "react";
import styled from "styled-components";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Button } from "../../../../components/Button";

export const Contact = () => {
  return (
    <StyledContacts>
      <SecthionTitle>Contact</SecthionTitle>
      <StyledForm>
        <Field placeholder={"name"}/>
        <Field placeholder={"subject"}/>
        <Field placeholder={"message"} as={"textarea"} />
        <Button type={"submit"}>Send Message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #bcdaddc8;
  `;

const StyledForm = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
margin: 0 auto;
`;

const Field = styled.input`
`;

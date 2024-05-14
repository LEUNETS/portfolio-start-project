import React from "react";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Button } from "../../../../components/Button";
import { Container } from "../../../../components/Container";
import {S} from './Contact_Styles'

export const Contact = () => {
  return (
    <S.Contacts>
      <Container>
      <SecthionTitle>Contact</SecthionTitle>
      <S.Form>
        <S.Field placeholder={"name"}/>
        <S.Field placeholder={"subject"}/>
        <S.Field placeholder={"message"} as={"textarea"} />
        <Button type={"submit"}>Send Message</Button>
      </S.Form>
      </Container>

    </S.Contacts>
  );
};

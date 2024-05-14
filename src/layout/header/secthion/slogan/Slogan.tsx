import React from "react";
import styled from "styled-components";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Button } from "../../../../components/Button";
import { Container } from "../../../../components/Container";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
        <SecthionTitle>I Am Available For Freelance</SecthionTitle>
      <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
  
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
min-height: 30vh;
background-color: #efe7dc;
`;

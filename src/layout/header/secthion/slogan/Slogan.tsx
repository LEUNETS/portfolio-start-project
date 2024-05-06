import React from "react";
import styled from "styled-components";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Button } from "../../../../components/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SecthionTitle>I Am Available For Freelance</SecthionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
min-height: 30vh;
background-color: #efe7dc;
`;

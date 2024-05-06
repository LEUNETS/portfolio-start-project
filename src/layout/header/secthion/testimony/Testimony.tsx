import React from "react";
import styled from "styled-components";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Icon } from './../../../../components/icon/Icon';
import { Slider } from "../../../../components/slider/Slider";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SecthionTitle>Testimony</SecthionTitle>
      <FlexWrapper directhion={"column"} align={"center"}>
      <Icon iconId={"quote-svg"}/>
    <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
background-color: #b1c5d6dc;
min-height: 50vh;
`

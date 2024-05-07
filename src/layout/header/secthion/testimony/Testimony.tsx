import React from "react";
import styled from "styled-components";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Icon } from './../../../../components/icon/Icon';
import { Slider } from "../../../../components/slider/Slider";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { IconWrapper } from "../skill/Skill";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SecthionTitle>Testimony</SecthionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
        <Icon iconId={"quote-svg"}/>
        </IconWrapper>
    <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
background-color: #b1c5d6dc;
min-height: 50vh;

${IconWrapper} {
  margin: 40px 0 72px;
}
`

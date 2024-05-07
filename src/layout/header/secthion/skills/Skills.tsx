import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Skill } from "../skill/Skill";
import { Container } from "../../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SecthionTitle>My Skills</SecthionTitle>

        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Skill
            iconId={"html-svg"}
            title={"Html5"}
            description={
              "It will soon be dark, she said to herself as she trotted along."
            }
          />
          <Skill
            iconId={"css3-svg"}
            title={"Css3"}
            description={
              "So much the better! The neighbours will not see what I'm bringing home, and I shall have all the night to myself"
            }
          />
          <Skill
            iconId={"react-svg"}
            title={"React"}
            description={
              "and be able to think what I'll do! Mayhap I'll buy a grand house and just sit by the fire with a cup o' "
            }
          />
          <Skill
            iconId={"typescript-svg"}
            title={"TypeScript"}
            description={
              "tea and do no work at all like a queen. Or maybe I'll bury it at the garden"
            }
          />
          <Skill
            iconId={"styledcomponents-svg"}
            title={"Styled components"}
            description={
              "foot and just keep a bit in the old china teapot on the chimney-piece."
            }
          />
          <Skill
            iconId={"figma-svg"}
            title={"Web Design"}
            description={
              "Or maybe—Goody! Goody! I feel that grand I don't know myself."
            }
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;

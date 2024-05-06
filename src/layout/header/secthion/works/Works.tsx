import React from "react";
import styled from "styled-components";
import { SecthionTitle } from "../../../../components/SecthionTitle";
import { Menu } from "../../../../components/menu/Menu";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../../assets/images/lesson-1.png";
import timerImg from "./../../../../assets/images/lesson-2.png";

const worksItems = ["ALL", "Landing Page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <SecthionTitle>My Works</SecthionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper justify={"space-around"}>
        <Work title={"Social Network"} src={socialImg} 
        text={"Summertime,white Porche Carrera is milky I'm on the grind let my paper stack when I'm filthy It's funny how niggas get the screw facin' at me Anyhow, they aint got the heart to get at me I'll get down, Southside's the hood that I come from"}/>

        <Work title={"Timer"} src={timerImg} text={"So I don't cruise to nobody hood without my gun You know the kid ain't gon' fall for all that bullshit Try and stick me, I'ma let off a full clip It ain't my fault you done fucked up your re-up"} />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #8e9ba6;
`;

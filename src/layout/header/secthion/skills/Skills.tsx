import React from "react";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SecthionTitle} from "../../../../components/SecthionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../../components/Container";
import {S} from './Skills_Styles'
import {Fade} from "react-awesome-reveal";


const skillData = [
    {
        iconId: "html-svg",
        title: "Html5",
        description: "So much the better! The neighbours will not see what I'm bringing home, and I shall have all the night to myself"
    },
    {
        iconId: "css3-svg",
        title: "Css3",
        description: "So much the better! The neighbours will not see what I'm bringing home, and I shall have all the night to myself"
    },
    {
        iconId: "react-svg",
        title: "React",
        description: "So much the better! The neighbours will not see what I'm bringing home, and I shall have all the night to myself"
    },
    {
        iconId: "typescript-svg",
        title: "TypeScript",
        description: "So much the better! The neighbours will not see what I'm bringing home, and I shall have all the night to myself"
    },
    {
        iconId: "styledcomponents-svg",
        title: "Styled components",
        description: "So much the better! The neighbours will not see what I'm bringing home, and I shall have all the night to myself"
    },
    {
        iconId: "figma-svg",
        title: "html5",
        description: "So much the better! The neighbours will not see what I'm bringing home, and I shall have all the night to myself"
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SecthionTitle>My Skills</SecthionTitle>

                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill
                                iconId={s.iconId} key={index}
                                title={s.iconId}
                                description={s.description}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};



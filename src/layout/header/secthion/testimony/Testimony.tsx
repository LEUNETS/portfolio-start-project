import React from "react";
import styled from "styled-components";
import {SecthionTitle} from "../../../../components/SecthionTitle";
import {Icon} from './../../../../components/icon/Icon';
import {Slider} from "../../../../components/slider/Slider";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Container} from "../../../../components/Container";
import {S} from '../skills/Skills_Styles'

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SecthionTitle>Testimony</SecthionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote-svg"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #b1c5d6dc;
    min-height: 50vh;
    position: relative;

    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`

import React from "react";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Footer_Styles'

const SocialItemData = [
    {iconId: "inst-svg"},
    {iconId: "tg-svg"},
    {iconId: "vk-svg"},
    {iconId: "lindekin-svg"},
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Dmitriy</S.Name>
                <S.SocialList>

                    {SocialItemData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 Dmitryi Leunets, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

